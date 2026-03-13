import React from "react";

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: number | string;
  fill?: string;
  [key: string]: any;
}

export default function SvgTextLogo({
  text,
  className = "",  fontSize = 24,
  fontWeight = "bold",  fill = "currentColor",  ...props
}: SvgTextLogoProps) {
  return (
    <svg
      viewBox={`0 0 ${text.length * fontSize} ${fontSize * 1.5}`}
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="0"
        y="0"
        fontSize={fontSize}
        fontWeight={fontWeight}
        fill={fill}
        dominantBaseline="middle"
      >
        {text}
      </text>
    </svg>
  );
}
