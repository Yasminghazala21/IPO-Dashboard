# 📊 IPO Dashboard – React Application

A clean, responsive **IPO Listing & Details Dashboard** built with **React**, designed to demonstrate strong fundamentals in UI development, component architecture, and responsive design — exactly aligned with real-world frontend expectations.

> This project was created as part of a technical assignment and focuses on **clarity, scalability, and user experience**, without relying on external UI libraries.

---

## 🚀 Live Overview

The application consists of **two main pages**:

1. **IPO List Page** – Displays a list of upcoming IPOs with key information.
2. **IPO Details Page** – Shows detailed IPO information with a responsive timeline and company overview.

Both pages are fully responsive and optimized for **desktop and mobile views**.

---

## 🧠 Key Highlights

* ⚛️ Built using **React Functional Components**
* 🎯 Uses **React Router** for page navigation
* 📱 Fully **responsive UI** (Desktop + Mobile)
* 🧩 Modular and reusable component structure
* 🎨 Custom UI built using **pure CSS + Flexbox**
* 🔤 Uses **Sora** font for a modern, professional look
* 🧪 Static data used to **simulate real API responses**
* 🚫 No external UI libraries (intentional design choice)

---

## 📄 Pages & Features

### 1️⃣ IPO List Page

* Displays IPOs in a clean, table-like layout
* Shows:

  * Company name
  * Issue date
  * Issue size
  * Price range
  * Minimum investment
  * Number of lots
* Each IPO row is clickable and navigates to the details page
* Responsive layout converts table view into stacked cards on mobile

---

### 2️⃣ IPO Details Page

#### Desktop View

* Header with **Home navigation placeholder**
* **Download button** 
* IPO details card showing all key values
* Horizontal IPO timeline with connected progress steps
* About company section

#### Mobile View

* Layout stacks vertically for better readability
* IPO timeline converts into a **vertical stepper**
* About section includes **Read More / Read Less** toggle

---

## 🧱 Tech Stack

| Technology        | Usage          |
| ----------------- | -------------- |
| React             | UI development |
| React Router      | Navigation     |
| HTML5             | Markup         |
| CSS3              | Styling        |
| Flexbox           | Layout system  |
| JavaScript (ES6+) | Logic          |

> **Note:** No UI frameworks (Material UI, Bootstrap, Tailwind, etc.) were used.

---

## 📁 Project Structure

```
src/
 ├── components/
 │    ├── IpoList.jsx
 │    ├── IpoDetails.jsx
 │    └── ipo.css
 │
 ├── data/
 │    └── ipoData.js
 │
 ├── App.js
 ├── index.js
 └── index.css
```

This structure keeps **data, components, and styling cleanly separated**, making the project easy to scale and maintain.

---

## 🔁 State & Logic

* IPO data is stored locally as a JavaScript object to mock real API behavior
* URL parameters are used to fetch the correct IPO details
* Component-level state is used for UI interactions such as **Read More / Read Less**

---

## 📱 Responsive Design Strategy

* Desktop-first layout using Flexbox
* Media queries at `768px` breakpoint
* Timeline switches from horizontal → vertical
* Text-heavy sections optimized for small screens

---

## 🛠️ How to Run the Project Locally

```bash
npm install
npm start
```

Then open:

```
http://localhost:3000
```

---

## 🎯 What This Project Demonstrates

* Strong understanding of **React fundamentals**
* Ability to convert UI designs into functional components
* Clean CSS architecture without external dependencies
* Attention to responsiveness and usability
* Real-world approach to frontend assignments

---

## 📌 Possible Enhancements

* Fetch IPO data from a real API
* Add animations to timeline transitions
* Implement actual file download functionality
* Improve accessibility (ARIA roles, keyboard navigation)

---

## 👤 Author

**Yasmin Ghazala**
