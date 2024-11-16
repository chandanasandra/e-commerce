import { useCallback } from 'react';
import { create } from 'xmlbuilder2';

const useXmlDownloader = (jsonData) => {
  const sanitizeKey = (key) => key.replace(/[^a-zA-Z0-9_-]/g, '_'); // Replace invalid characters with underscores

  const downloadXml = useCallback(() => {
    try {
      // Convert JSON to XML
      const xmlRoot = create({ version: '1.0' }).ele('order'); // Root element

      const addJsonToXml = (data, parent) => {
        if (typeof data === 'object' && !Array.isArray(data)) {
          // If it's an object, process each key-value pair
          for (const key in data) {
            const sanitizedKey = sanitizeKey(key);
            const value = data[key];
            if (Array.isArray(value)) {
              // Handle arrays by creating a parent tag for the array
              const arrayParent = parent.ele(sanitizedKey);
              value.forEach((item) => {
                addJsonToXml(item, arrayParent.ele('item')); // Create an `item` for each array entry
              });
            } else if (typeof value === 'object') {
              // If it's a nested object, recurse
              addJsonToXml(value, parent.ele(sanitizedKey));
            } else {
              // Add primitive values as text nodes
              parent.ele(sanitizedKey).txt(value);
            }
          }
        } else {
          // If it's a primitive value, add it as text
          parent.txt(data);
        }
      };

      addJsonToXml(jsonData, xmlRoot); // Start adding JSON data to XML structure

      // Convert XML to a string
      const xml = xmlRoot.end({ prettyPrint: true });

      // Create a Blob from the XML string
      const blob = new Blob([xml], { type: 'application/xml' });

      // Create a temporary anchor element to trigger the download
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'order.xml';

      // Simulate a click event to trigger download
      document.body.appendChild(link); // Append to body (important for some browsers)
      link.click();

      // Cleanup
      URL.revokeObjectURL(link.href);
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading XML:', error);
    }
  }, [jsonData]);

  return downloadXml;
};

export default useXmlDownloader;
