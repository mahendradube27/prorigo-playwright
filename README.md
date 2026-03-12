
# Prorigo Playwright Automation Assignment

## Overview

This project demonstrates an end-to-end automation testing framework built using **Playwright with TypeScript**. The framework automates validation of a dynamic data table including searching, sorting, pagination, and page size functionality.

The goal of this project is to showcase automation best practices such as **Page Object Model (POM), reusable utilities, test data management, and clean project structure**.

The automated scenarios use the sample data table application:

https://datatables.net/examples/basic_init/alt_pagination.html

---

# Tech Stack

* Playwright Test Runner
* TypeScript
* Node.js
* Allure Report
* Git & GitHub

---

---

# Key Features

### 1. Page Object Model (POM)

The framework follows the **Page Object Model design pattern**, which separates page locators and actions from test logic. This improves test maintainability and readability.

Example:

```
pages/dataTablePage.ts
```

---

### 2. Data Driven Testing

Test data such as search values, column names, and pagination details are stored in external JSON files.

Example:

```
TestData/searchData.json
```

Benefits:

* Easier test maintenance
* Reusable test inputs
* Scalable test design

---

### 3. Sorting Validation

Sorting functionality is validated by:

1. Extracting column values from the table
2. Creating a sorted copy of the same data
3. Comparing UI values with the expected sorted values

---

### 4. Search Validation

Search functionality verifies that:

* Only matching rows are displayed
* Non-matching searches show the correct "No records found" message

---

### 5. Pagination Testing

Pagination tests verify:

* Navigation between pages
* Correct number of records displayed
* Data consistency across pages

---

# Automated Test Scenarios

### Data Table Testing

The following scenarios are automated:

* Search within the table
* Column sorting validation
* Pagination navigation
* Page size change
* Combined scenario:

  * Search data
  * Sort column
  * Navigate pagination
  * Validate filtered results

---

# Best Practices Followed

* Page Object Model
* Reusable functions
* Data-driven testing
* Clean project structure
* Proper assertions
* No hard waits
* Configurable Playwright settings

---

