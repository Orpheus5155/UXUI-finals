# SMart SuperApp - Premium UI/UX Implementation

SMart SuperApp is a high-fidelity React Native application built with Expo and TypeScript. It features a premium design system inspired by modern super-apps, focusing on vibrant aesthetics, smooth transitions, and a seamless user journey across multiple service modules.

## 🚀 Technology Stack

- **Framework**: React Native with Expo
- **Language**: TypeScript (Type-safe development)
- **Icons**: Lucide React Native (Crisp, customizable vector icons)
- **Navigation**: React Navigation (Stack & Tab navigation)
- **Styling**: Standard `StyleSheet` with a centralized theme system

## 🎨 Design to Code: The Workflow

The core strength of this project lies in the meticulous translation of high-fidelity Figma designs into functional, responsive code. Our process follows these critical steps:

### 1. Visual Analysis & Token Extraction
Before coding, we analyze the Figma design to identify recurring design tokens:
- **Color Palette**: Extracting exact HSL/Hex values for primary (Brand Blue), secondary (Success Green, Error Red), and neutral colors.
- **Typography**: Mapping font sizes, weights (Thin, Light, Bold, etc.), and line heights to a consistent hierarchy.
- **Shadows & Elevation**: Using `shadowColor`, `shadowOpacity`, and `elevation` (for Android) to replicate the premium depth seen in the designs.

### 2. Layout Architecture
We use a "Component-First" approach:
- **Box Model Implementation**: Replicating complex Figma layouts using Flexbox.
- **Premium Aesthetics**: Implementing high-radius borders (e.g., 33px for movie cards, 51px for action buttons) and glassmorphism-inspired overlays.
- **Responsiveness**: Using `Dimensions` and percentage-based widths to ensure the app looks stunning on all screen sizes.

### 3. Flow Logic & Navigation
Design isn't just static; it's movement. We implement the "Happy Path" defined in Figma:
- **Step-by-Step Checkout**: Cart ➔ Checkout ➔ PIN Verification ➔ Success Screen.
- **Contextual Transitions**: Smooth navigation between Discovery screens and Detail views.

## 📦 Project Modules

### 🍔 FastFood Service
A complete ordering flow from item selection to successful payment.
- **My Order Cart**: Interactive item management and real-time total calculation.
- **Checkout**: Address selection, billing breakdown, and payment method selection.
- **Verify PIN**: A secure, focused numeric input interface.
- **Payment Success**: Vibrant celebratory screen with receipt download options.

### 🎬 Cinema Ticket
A cinematic exploration experience.
- **SMart Cinema Home**: Featured movies, "Coming Soon" carousels, and local cinema discovery.
- **Explore Movie**: A dedicated dark-mode interface for deep-diving into movie catalogs, featuring "Now Showing" and "Upcoming" categories.

### 👤 Profile & Wallet
Centralized user management and financial services.
- **Smart Wallet**: Real-time balance tracking and transaction history.
- **Utility Hub**: A comprehensive grid of 20+ services accessible from the profile.

## 🛠️ Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Start the Development Server**:
   ```bash
   npx expo start
   ```
3. **Run on Device/Emulator**:
   Scan the QR code with the Expo Go app (iOS/Android) or press `a` for Android / `i` for iOS.

## 📂 Project Structure

```text
src/
├── assets/        # Static images and icons
├── context/       # Auth and Global state management
├── navigation/    # Root and Module navigators
├── screens/       # Module-specific screen implementations
│   ├── FastFood/
│   ├── Cinema/
│   ├── Profile/
│   └── ...
└── theme/         # Design system tokens (Colors, Spacing)
```

---
*Built with ❤️ by the Antigravity Team*
