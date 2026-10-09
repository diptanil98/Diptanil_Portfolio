import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "size-3.5" }: TechIconProps) {
  const norm = name.toLowerCase().trim();

  // React.js
  if (norm.includes("react")) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // TypeScript
  if (norm.includes("typescript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M11.5 8H6V10H7.7V17H10V10H11.5V8ZM14.3 14.5C14.8 15.2 15.6 15.6 16.5 15.6C17.5 15.6 18.2 15.1 18.2 14.3C18.2 13.5 17.6 13.1 16.2 12.5C14.5 11.7 13.5 11 13.5 9.4C13.5 7.8 14.8 6.6 16.6 6.6C17.9 6.6 18.9 7.1 19.6 8.1L18 9.3C17.5 8.7 17.1 8.4 16.5 8.4C15.8 8.4 15.3 8.8 15.3 9.4C15.3 10 15.7 10.3 17 10.9C18.8 11.7 19.8 12.5 19.8 14.1C19.8 15.9 18.4 17.2 16.4 17.2C14.8 17.2 13.6 16.4 12.8 15.2L14.3 14.5Z"
          fill="white"
        />
      </svg>
    );
  }

  // JavaScript
  if (norm === "javascript") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M7 16.5C7.5 17.2 8.3 17.6 9.2 17.6C10.2 17.6 11 17 11 15.2V7.5H9V15.2C9 15.8 8.7 16 8.3 16C7.9 16 7.6 15.8 7.3 15.4L7 16.5ZM13.8 14.5C14.3 15.2 15.1 15.6 16 15.6C17 15.6 17.7 15.1 17.7 14.3C17.7 13.5 17.1 13.1 15.7 12.5C14 11.7 13 11 13 9.4C13 7.8 14.3 6.6 16.1 6.6C17.4 6.6 18.4 7.1 19.1 8.1L17.5 9.3C17 8.7 16.6 8.4 16 8.4C15.3 8.4 14.8 8.8 14.8 9.4C14.8 10 15.2 10.3 16.5 10.9C18.3 11.7 19.3 12.5 19.3 14.1C19.3 15.9 17.9 17.2 15.9 17.2C14.3 17.2 13.1 16.4 12.3 15.2L13.8 14.5Z"
          fill="#1C1C1C"
        />
      </svg>
    );
  }

  // HTML5
  if (norm.includes("html")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M3 2L4.8 20.2L12 22.2L19.2 20.2L21 2H3Z" fill="#E34F26" />
        <path d="M12 3.7V20.4L17.7 18.8L19.2 3.7H12Z" fill="#EF652A" />
        <path
          d="M6.8 6.5H17.2L16.9 9.3H12V10.7H16.7L16.2 15.8L12 17V15.5L14.7 14.7L14.9 12.1H9.2L8.9 9.3H12V7.9H6.8V6.5Z"
          fill="white"
        />
      </svg>
    );
  }

  // CSS3
  if (norm.includes("css")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M3 2L4.8 20.2L12 22.2L19.2 20.2L21 2H3Z" fill="#1572B6" />
        <path d="M12 3.7V20.4L17.7 18.8L19.2 3.7H12Z" fill="#33A9DC" />
        <path
          d="M7 6.5H17.2L17 8.5H9.1L9.4 11H16.8L16.3 15.8L12 17L7.7 15.8L7.4 12.8H9.4L9.6 14.4L12 15.1L14.4 14.4L14.6 12.6H7.1L6.7 8.5H12V6.5H7Z"
          fill="white"
        />
      </svg>
    );
  }

  // Tailwind CSS
  if (norm.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 6C9 6 7.2 7.5 6.6 10.5C7.8 8.7 9.3 8.1 11.1 8.7C12.1 9 12.9 9.8 13.7 10.7C15 12 16.5 13.5 20.4 13.5C23.4 13.5 25.2 12 25.8 9C24.6 10.8 23.1 11.4 21.3 10.8C20.3 10.5 19.5 9.7 18.7 8.8C17.4 7.5 15.9 6 12 6ZM6 13.5C3 13.5 1.2 15 0.6 18C1.8 16.2 3.3 15.6 5.1 16.2C6.1 16.5 6.9 17.3 7.7 18.2C9 19.5 10.5 21 14.4 21C17.4 21 19.2 19.5 19.8 16.5C18.6 18.3 17.1 18.9 15.3 18.3C14.3 18 13.5 17.2 12.7 16.3C11.4 15 9.9 13.5 6 13.5Z"
          fill="#38BDF8"
          transform="scale(0.85) translate(1, 0)"
        />
      </svg>
    );
  }

  // Node.js
  if (norm.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L3.5 7V17L12 22L20.5 17V7L12 2ZM11.2 18.4L5.6 15.1V9.2L9 11.2V13.8L11.2 15.1V18.4ZM12 13.8L9.8 12.5L12 11.2L14.2 12.5L12 13.8ZM12.8 18.4V15.1L15 13.8V11.2L18.4 9.2V15.1L12.8 18.4ZM17.4 7.6L12 4.4L6.6 7.6L12 10.8L17.4 7.6Z"
          fill="#5FA04E"
        />
      </svg>
    );
  }

  // Express.js
  if (norm.includes("express")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#222226" />
        <path
          d="M5 8H8.5C9.9 8 11 9.1 11 10.5C11 11.9 9.9 13 8.5 13H6.8V16H5V8ZM6.8 11.4H8.3C8.8 11.4 9.2 11 9.2 10.5C9.2 10 8.8 9.6 8.3 9.6H6.8V11.4ZM12.2 16L14.8 12.1L12.5 8H14.7L15.9 10.3L17.1 8H19.2L16.9 12.1L19.5 16H17.3L15.9 13.7L14.4 16H12.2Z"
          fill="#EDEDED"
        />
      </svg>
    );
  }

  // TensorFlow.js
  if (norm.includes("tensorflow")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2.5L3.5 7.4V17.3L7.7 19.8V11.6L12 14.1L16.3 11.6V19.8L20.5 17.3V7.4L12 2.5Z" fill="#FF6F00" />
        <path d="M12 14.1L7.7 11.6V19.8L12 22.3L16.3 19.8V11.6L12 14.1Z" fill="#FFA800" opacity="0.8" />
      </svg>
    );
  }

  // AI workflows
  if (norm.includes("ai workflow") || norm.includes("ai")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill="#A855F7"
        />
        <circle cx="12" cy="12" r="2.5" fill="#E9D5FF" />
      </svg>
    );
  }

  // n8n
  if (norm.includes("n8n")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#EA4B71" />
        <path
          d="M6 15C6 13.3 7.3 12 9 12C9.5 12 10 12.1 10.4 12.4L12.5 10.3C12.2 9.9 12 9.5 12 9C12 7.3 13.3 6 15 6C16.7 6 18 7.3 18 9C18 10.7 16.7 12 15 12C14.5 12 14 11.9 13.6 11.6L11.5 13.7C11.8 14.1 12 14.5 12 15C12 16.7 10.7 18 9 18C7.3 18 6 16.7 6 15Z"
          fill="white"
        />
      </svg>
    );
  }

  // MongoDB
  if (norm.includes("mongodb")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 1.5C12 1.5 6.5 7.8 6.5 13.5C6.5 17.5 9.2 21.2 12 22.5C14.8 21.2 17.5 17.5 17.5 13.5C17.5 7.8 12 1.5 12 1.5Z"
          fill="#47A248"
        />
        <path
          d="M12 1.5V22.5C12 22.5 11.8 22.4 11.6 22.3C9.1 21.1 6.8 17.6 6.8 13.5C6.8 8.3 11.5 2.5 12 1.5Z"
          fill="#499D4A"
          opacity="0.8"
        />
      </svg>
    );
  }

  // MySQL
  if (norm.includes("mysql")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00758F" />
        <path
          d="M5 15C6.2 16.3 8.3 17 11 17C14.8 17 17.8 15.3 19 12.8C18.2 12.9 17.3 12.8 16.4 12.4C15.4 12 14.8 11.3 14.5 10.3C14.1 8.8 15 7.2 16.4 6.7C15.4 6.2 14.2 6 12.9 6C9.1 6 6.1 8.2 5 11.3C5.5 11.1 6.1 11.1 6.6 11.3C7.6 11.7 8.2 12.7 7.9 13.8C7.7 14.4 7.2 14.8 6.6 15H5Z"
          fill="#F29111"
        />
      </svg>
    );
  }

  // AWS
  if (norm.includes("aws")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#232F3E" />
        <path
          d="M5.5 10.8C6.6 10.6 7.4 10.1 7.4 9.3C7.4 8.7 7 8.4 6.3 8.4C5.5 8.4 5 8.9 4.8 9.5L4 9.1C4.4 8 5.3 7.5 6.4 7.5C7.6 7.5 8.5 8.1 8.5 9.3V12.5H7.5V11.8C7.1 12.4 6.4 12.6 5.7 12.6C4.6 12.6 3.8 11.9 3.8 10.8C3.8 9.6 4.7 9 5.8 8.9L7.4 8.8V8.6C7.4 7.9 6.9 7.6 6.2 7.6C5.5 7.6 5.1 7.9 4.9 8.4L4.1 8C4.5 7.2 5.2 6.8 6.3 6.8M7.4 9.6L6 9.8C5.3 9.9 4.8 10.2 4.8 10.8C4.8 11.4 5.3 11.7 5.9 11.7C6.8 11.7 7.4 11.1 7.4 10.2V9.6ZM18.5 15C14.7 17.5 9.2 17.5 5.5 15.5C5.3 15.4 5.1 15.6 5.3 15.8C8.8 18.2 14.8 18.2 18.8 15.4C19.1 15.2 18.8 14.8 18.5 15ZM19.2 14.4C19.1 14.2 18.4 14.5 18 14.7C17.7 14.8 17.6 15 17.9 15.1C18.6 15.3 19.3 15.2 19.5 14.9C19.6 14.7 19.4 14.2 19.2 14.4Z"
          fill="#FF9900"
        />
      </svg>
    );
  }

  // GCP
  if (norm.includes("gcp") || norm.includes("google")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M19.4 10.8H12V13.8H16.2C15.8 15.6 14.2 16.8 12 16.8C9.3 16.8 7.2 14.7 7.2 12C7.2 9.3 9.3 7.2 12 7.2C13.2 7.2 14.3 7.6 15.1 8.4L17.3 6.2C15.9 4.9 14.1 4.2 12 4.2C7.7 4.2 4.2 7.7 4.2 12C4.2 16.3 7.7 19.8 12 19.8C16.5 19.8 19.5 16.6 19.5 12.2C19.5 11.7 19.5 11.2 19.4 10.8Z" fill="#4285F4" />
      </svg>
    );
  }

  // Firebase
  if (norm.includes("firebase")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4.5 17.8L6.8 3.5C6.9 2.9 7.7 2.7 8.1 3.2L11.5 9.5L4.5 17.8Z" fill="#FFA000" />
        <path d="M12.5 11.2L14.2 8C14.5 7.4 15.4 7.5 15.6 8.2L19.5 17.8L12.5 11.2Z" fill="#F57C00" />
        <path d="M4.5 17.8L11.5 22.2C11.8 22.4 12.2 22.4 12.5 22.2L19.5 17.8L12.2 4.3C12 3.8 11.3 3.8 11.1 4.4L4.5 17.8Z" fill="#FFCA28" />
      </svg>
    );
  }

  // Docker
  if (norm.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M22.5 10.5C22 10.5 21.6 10.7 21.2 11C20.5 10.3 19.5 9.8 18.2 9.8C18.1 9.8 18 9.8 17.9 9.8C17.4 8.7 16.5 7.8 15.3 7.3L14.7 7L14.4 7.6C14 8.4 13.9 9.3 14 10.2C13.5 10.4 12.9 10.5 12.4 10.5H1.5C1.2 10.5 1 10.7 1 11V14.5C1 17.5 3.5 20 7.5 20C12.5 20 16.7 17.5 18.5 13.5C19.7 13.5 20.8 13.1 21.6 12.4C22.2 12.5 22.7 12.2 23 11.7C23.2 11.2 23 10.6 22.5 10.5ZM6.5 9.5H8.5V11.5H6.5V9.5ZM6.5 7H8.5V9H6.5V7ZM9 9.5H11V11.5H9V9.5ZM9 7H11V9H9V7ZM11.5 9.5H13.5V11.5H11.5V9.5ZM11.5 7H13.5V9H11.5V7ZM4 9.5H6V11.5H4V9.5Z"
          fill="#2496ED"
        />
      </svg>
    );
  }

  // GitHub Actions
  if (norm.includes("github actions") || norm.includes("actions")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#2088FF" />
        <path
          d="M12 5L15 9H13V14H11V9H9L12 5ZM7 11L11 15V13H16V17H14L18 21L22 17H20V11H13V9H11V11H7Z"
          fill="white"
        />
      </svg>
    );
  }

  // Git
  if (norm === "git") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M21.6 10.8L13.2 2.4C12.7 1.9 11.9 1.9 11.4 2.4L9.5 4.3L11.8 6.6C12.4 6.4 13.1 6.6 13.6 7.1C14.1 7.6 14.3 8.3 14.1 8.9L16.2 11C16.8 10.8 17.5 11 18 11.5C18.7 12.2 18.7 13.2 18 13.9C17.3 14.6 16.3 14.6 15.6 13.9C15.1 13.4 14.9 12.7 15.1 12.1L13.1 10.1V14.7C13.3 14.9 13.4 15.2 13.4 15.5C13.4 16.5 12.6 17.3 11.6 17.3C10.6 17.3 9.8 16.5 9.8 15.5C9.8 14.7 10.3 14 11.1 13.8V9.1C10.3 8.9 9.8 8.2 9.8 7.4C9.8 6.9 10 6.5 10.3 6.1L8.1 3.9L2.4 9.6C1.9 10.1 1.9 10.9 2.4 11.4L10.8 19.8C11.3 20.3 12.1 20.3 12.6 19.8L21.6 12.6C22.1 12.1 22.1 11.3 21.6 10.8Z"
          fill="#F05032"
        />
      </svg>
    );
  }

  // GitHub
  if (norm === "github") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.47 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z"
          fill="#EDEDED"
        />
      </svg>
    );
  }

  // Chrome DevTools
  if (norm.includes("chrome") || norm.includes("devtools")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#22252A" />
        <path d="M12 6.5C15 6.5 17.5 8.5 18.2 11.2L12.5 11.2L9.5 6.8C10.3 6.6 11.1 6.5 12 6.5Z" fill="#EA4335" />
        <path d="M18.2 11.2C18.4 11.9 18.5 12.7 18.5 13.5C18.5 16.5 16.5 19 13.7 19.8L10.8 14.8L14.7 11.2H18.2Z" fill="#FBBC05" />
        <path d="M13.7 19.8C13.2 19.9 12.6 20 12 20C8.4 20 5.4 17.6 4.5 14.3L9.2 14.3L12 19.5" fill="#34A853" />
        <path d="M4.5 14.3C4.2 13.6 4 12.8 4 12C4 8.7 6.1 5.9 9.1 4.8L12 9.8L7.3 14.3H4.5Z" fill="#4285F4" />
        <circle cx="12" cy="12" r="3.5" fill="#FFFFFF" />
        <circle cx="12" cy="12" r="2.8" fill="#1A73E8" />
      </svg>
    );
  }

  // Fallback generic tech dot
  return (
    <span className="size-2 rounded-full bg-accent" />
  );
}
