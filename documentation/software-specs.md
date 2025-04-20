# Software Requirements Specification: Swapnasiddhi (Frontend)

## 1. Introduction

- **Project Name**: Swapnasiddhi
- **Purpose**:
  - Develop a luxurious, responsive frontend platform to connect established Maratha mentors with aspiring Maratha mentees.
  - Provide a clean, culturally enriched UI that reflects Maratha heritage and unity.
- **Tech Stack**:
  - **Framework**: React (Next.js)
  - **Styling**: Tailwind CSS with Shadcn
  - **Icons**: Lucide Icons
  - **Animations**: Framer Motion
  - **State Management**: React Context API
  - **Note**: Backend logic (auth, validation, data persistence) is handled by another team.

## 2. System Overview

- **Architecture**:
  - Frontend-only web application leveraging modern React practices.
  - Single-page application (SPA) design with dynamic routing via Next.js.
- **User Focus**:
  - **Mentors**: Established professionals showcasing detailed profiles.
  - **Mentees**: Young individuals seeking guidance and career advice.
- **Design Approach**:
  - Incorporates rich, saffron-based themes, glassmorphism, and background blur effects for a modern and culturally resonant look.
  - Fully responsive across mobile, tablet, and desktop devices.

## 3. Functional Requirements

### A. Landing Page

- **Content & Layout**:
  - Full-screen hero section with a high-quality background image overlaid with a semi-transparent blur.
  - Clear mission statement and community introduction.
  - Animated timeline displaying key cultural milestones.
  - Industry carousel showcasing fields such as Tech, Law, Medicine, and Government.
- **Call-to-Actions (CTAs)**:
  - Prominent buttons: "Join as Mentor" and "Find Your Guide" featuring a glassmorphism effect.

### B. Navigation Bar

- **Structure**:
  - Fixed navigation bar visible on all pages.
  - Menu items: Home, Login, Signup.
- **User Flow**:
  - Differentiated login/signup flows for mentors and mentees.
  - Slight shadow and blur effect for visual separation.

### C. Authentication Pages (Frontend Only)

- **Login/Signup**:
  - Two separate flows for mentors and mentees.
  - Form fields for essential data (e.g., name, email, password).
  - Minimal validation as no backend integration is present in this module.

### D. Mentor Profile Page

- **Profile Details**:
  - Hero banner with blurred background to emphasize profile details.
  - Detailed fields: name, photo, professional field, location, experience, achievements, bio, LinkedIn profile, etc.
- **Interactive Elements**:
  - “Follow” button displaying a static follower count.
  - “Connect” button as a sticky CTA, enhanced with a subtle blurred backdrop.
  - Display of badges and tags to highlight key achievements.

### E. Mentee Profile Page

- **Profile Details**:
  - Simplified design with clear sections for name, photo, interests, and a brief bio.
  - Consistent soft background blur for a modern aesthetic.

### F. Explore Mentors Page

- **Layout & Functionality**:
  - Combination of grid and list views for browsing mentor profiles.
  - Interactive filtering options (dropdowns and toggle buttons) for:
    - Industry
    - Location
    - Experience Level
  - Visual feedback using hover effects and blur transitions when filters are applied.

## 4. Non-Functional Requirements

- **Responsiveness**:
  - Mobile-first design ensuring optimal performance on smartphones, tablets, and desktops.
- **Performance**:
  - Optimized use of animations and lazy loading where applicable.
- **Accessibility**:
  - Adherence to WCAG guidelines including proper color contrast, alt text for images, and keyboard navigability.
- **UX Consistency**:
  - Uniform typography and color schemes across all pages.
  - Smooth animated transitions and hover states for an engaging user experience.

## 5. UI/UX Design Standards

- **Theme & Color Palette**:
  - Dominant saffron hues paired with rich, deep neutrals.
  - Accent colors used for CTAs and interactive elements.
- **Typography**:
  - Headers: Playfair Display for an elegant, cultural appeal.
  - Body: Modern sans-serif fonts for clarity and legibility.
- **Visual Effects**:
  - Use of glassmorphism and blurred background effects across key sections.
  - Soft-edged cards with subtle drop shadows to create depth.
- **Animations & Interactions**:
  - Framer Motion for dynamic page transitions and scroll-triggered animations.
  - Hover states that apply gentle blur to non-active background elements.
- **Layout Considerations**:
  - Asymmetrical and layered design for the landing page and profile pages.
  - Overlapping sections with dynamic animated content reveal.

## 6. Limitations

- **Backend Integration**:
  - No authentication, data persistence, or API integration within the frontend.
- **Static Elements**:
  - Interactive buttons like "Follow" and "Connect" are UI-only with no associated logic.
- **Form Handling**:
  - Basic form rendering without real-time backend validation.

## 7. Future Enhancements

- **Backend API Integration**:
  - Incorporate user authentication and profile management via a backend service.
- **Enhanced Interaction**:
  - Implement real-time chat or messaging between mentors and mentees.
- **User Engagement**:
  - Integrate additional features such as mentor availability calendars and appointment booking.
- **Progressive Web App (PWA)**:
  - Consider converting the platform to a PWA for improved performance and offline support.

## 8. Developer Notes

- **Component Organization**:
  - Utilize a modular component structure to manage UI elements (e.g., Navbar, Hero, ProfileCard).
  - Leverage Context API for global state management across pages.
- **Animation & Transition Strategy**:
  - Use Framer Motion for all page transitions and interactive element animations.
- **Styling Consistency**:
  - Follow Tailwind CSS best practices to ensure a consistent look and feel.
- **UI Libraries**:
  - Integrate Shadcn components where applicable for reusable UI patterns.
- **Code Maintenance**:
  - Write clean, maintainable code with clear comments and documentation for future enhancements.

---

This SRS provides a concise yet descriptive overview of the project’s requirements and technical considerations, ensuring clarity for both the development team and any future reviewers.
