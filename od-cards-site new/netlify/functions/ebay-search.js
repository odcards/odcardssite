const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify([
      { title: "Sample Card 1", price: "$19.99", url: "https://ebay.com" },
      { title: "Sample Card 2", price: "$29.99", url: "https://ebay.com" }
    ])
  };
};
