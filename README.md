# Web URL Hits Reporter

The Web URL Hits Reporter is a powerful Node.js tool designed to provide comprehensive insights into website usage and structure. It generates a report of URL hits from a specified website, sorted by hit count in descending order. Additionally, it includes features to generate error logs and log non-HTML pages, along with a robots.txt file analyzer to check crawl permissions.

## Benefits

- **Enhanced Website Understanding**: Gain valuable insights into user behavior and content consumption patterns.
- **Proactive Issue Detection**: Identify and address website issues, ensuring a smooth browsing experience.
- **Compliance and Risk Management**: Ensure compliance with website owner preferences and legal requirements, minimizing the risk of legal action.

## Use Cases

- **Content Optimization**: Prioritize content optimization efforts to enhance user engagement.
- **Issue Resolution**: Identify and resolve website issues, such as broken links or inaccessible content.
- **Compliance Assurance**: Ensure compliance with crawling directives and minimize the risk of legal consequences.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/DragonRider01598/Web-URL-Hits-Reporter.git
   cd web-url-hits-reporter
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

To generate a report, run the script with the following command:
```sh
npm start https://example.com/
```

This will provide you with a report of URL hits for the specified website.

### Example

```sh
Making report for https://example.com/
Hits: 100, Link: https://example.com/
Hits: 50, Link: https://example.com/products
Hits: 30, Link: https://example.com/about
Hits: 20, Link: https://example.com/contact
Hits: 10, Link: https://example.com/blog
Program exited at Thu Jun 06 2024 10:09:15 GMT+0530 (India Standard Time)
```

## Features

- **URL Hit Report Generation**: Analyzes website URLs and generates a report sorted by hit count.
- **Error Log Generation**: Captures and logs encountered errors during URL parsing.
- **Non-HTML Page Logging**: Logs all non-HTML pages encountered during crawling.
- **Robots.txt File Analyzer**: Analyzes the website's robots.txt file to determine crawl permissions.

## Legal and Ethical Considerations

When conducting web crawling activities, it's essential to adhere to legal and ethical guidelines:

- **Terms of Service**: Respect the terms of service of the website you are crawling.
- **Data Privacy**: Be mindful of data privacy regulations, such as GDPR.

## Performance Considerations

Consider the following performance aspects when using the program:

- **Resource Usage**: Crawling large websites may require significant CPU, memory, and bandwidth resources.
- **Scalability**: For large-scale crawling tasks, consider utilizing distributed crawling solutions or cloud-based services.