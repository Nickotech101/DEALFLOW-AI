# 🚀 DealFlow AI — Next-Gen Autonomous Sales Agent

DealFlow AI ek advanced, AI-powered business-to-business (B2B) sales tool hai jo companies ke landing page par baithkar 24/7 incoming user traffic ko manage karta hai. Yeh system chat ke dauran organically users se unka business data (Name, Email, Company, Budget) collect karta hai, use analyze karta hai, aur lead quality ke hisaab se automatic booking handle karta hai.

---

## 🌟 Key Features

* **Real-time AI Interaction:** Ek modern, fully responsive chat widget jo web users se dynamic conversations karta hai.
* **Intelligent Lead Qualification:** AI user ke input aur chat behaviour se instantly prioritize karta hai (`High Priority` vs `Low Priority`).
* **Automated Meeting Workflows:** High-priority profiles ko automatic demo booking infrastructure (Calendly) redirect karta hai.
* **Command Center Dashboard:** Real-time metrics charts (using Recharts) aur status tables ke sath company owners ke liye ek complete performance overview.
* **3D Matrix Sphere Globe Visualization:** Futuristic and high-tech 3D structural wireframe landing page animation jo modern SaaS tools ki feel deta hai.

---

## 🛠️ The Tech Stack

* **Frontend Framework:** Next.js (App Router)
* **Styling & UI:** Tailwind CSS & Tailwind PostCSS
* **Analytics & Graphs:** Recharts
* **AI Orchestration Platform:** FlowZint Engine API
* **Development Environment:** GitHub Codespaces

---

## 📂 Project Structure

```text
dealflow-ai/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── api/chat/route.js   # Next.js Serverless Route for FlowZint API
│   │   │   ├── dashboard/page.js   # Analytics Dashboard with Recharts
│   │   │   └── page.js             # Main Landing Page with 3D Sphere & Chat Widget
│   │   ├── components/
│   │   │   ├── ChatWidget.js       # Dynamic Client-side Chat Window
│   │   │   ├── SphereAnimation.js  # Custom 3D Wireframe Canvas Logic
│   │   │   └── SphereAnimation.module.css