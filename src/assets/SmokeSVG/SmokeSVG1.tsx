import * as React from "react";

function SmokeSVG1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 19 51"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path
        d="M608.982 609.746s-2.685 7.559 4.241 16.899c6.926 9.339 5.307 14.658 4.091 18.489-1.336 4.206-2.046 9.446-.414 15.152 0 0 1.422-8.574 7.551-16.97 6.13-8.395-.627-14.563-4.854-18.256-7.155-6.251-9.756-8.91-10.615-15.314z"
        fill="url(#prefix___Linear1)"
        transform="translate(-608.473 -609.746)"
      />
      <defs>
        <linearGradient
          id="prefix___Linear1"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(89.742 .975 615.606) scale(48.14199)"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.5} stopColor="#f3e8e4" />
          <stop offset={1} stopColor="#cfa493" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SmokeSVG1;
