import React, { useEffect, useRef } from "react";
import gsap, { Linear } from "gsap";

function SvgProgrammer(props: React.SVGProps<SVGSVGElement>) {
  const smoke1 = useRef(null);
  const smoke2 = useRef(null);

  gsap.config({
    nullTargetWarn: false
  });

  const timeLine = (element: React.MutableRefObject<null>) => {
    var fa = gsap.timeline();

    fa.to(element.current, 4, {
      y: -15,
      ease: Linear.easeIn,
      opacity: 1
    });
    fa.to(element.current, 4, {
      y: -38,
      ease: Linear.easeOut,
      opacity: 0
    });
    fa.repeat(-1);
  };

  useEffect(() => {
    timeLine(smoke1);
    timeLine(smoke2);
  });

  return (
    <svg
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={1.5}
      clipRule="evenodd"
      viewBox="0 0 3169 2416"
      {...props}
    >
      <path fill="none" d="M0 0h3168.27v2415.84H0z" />
      <path
        fill="#cb9dfa"
        d="M1376.58 402.417C847.802 297 417.834 999.163 524.698 1442.927c165.038 685.336 1133.03 793.939 1512.52 664.066 278.61-95.349 568.091-331.335 574.477-713.469 7.264-434.615-451.392-377.795-644.048-555.704-192.656-177.909-209.445-359.318-591.069-435.399z"
      />
      <path
        fill="url(#prefix___Linear2)"
        d="M2550.65 840.361c-75.761 9.356-153.563 38.593-132.232 124.023 16.124 64.577 77.376 56.673 139.259 111.615 33.906 30.102 55.971 102.339 66.678 123.104 31.92 61.91 59.862 40.993 74.348 20.175 14.486-20.818 58-142.37 34.41-260.729-23.59-118.359-132.292-124.384-182.463-118.188z"
      />
      <path
        fill="url(#prefix___Linear3)"
        d="M2696.77 1284.72s-53.513-13.77-51.386 50.426c2.127 64.196 25.176 61.954 38.713 52.069 13.537-9.884 51.266-43.036 42.143-73.097-7.969-26.259-29.47-29.398-29.47-29.398z"
      />
      <path
        fill="#85ffff"
        d="M1537.85 1399.53c-33.744 4.001-194.225 21.148-222.915-10.868-32.097-35.817-23.472-94.336-17.587-124.961 5.884-30.625 75.293-178.579 123.751-218.291 48.458-39.712 120.149-37.391 120.149-37.391l.002.335c15.57.181 74.527 3.209 116.256 37.406 48.458 39.712 117.867 187.667 123.752 218.291 5.884 30.625 14.509 89.144-17.588 124.962-29.632 33.067-199.856 13.689-225.82 10.517z"
      />
      <path
        fill="url(#prefix___Linear4)"
        d="M1541.13 1398.94c-22.083 4.001-127.103 21.148-145.878-10.868-21.004-35.817-15.36-94.336-11.509-124.961 3.851-30.625 49.272-178.579 80.984-218.291 31.711-39.712 78.626-37.391 78.626-37.391l.002.335c10.189.181 48.771 3.209 76.079 37.406 31.711 39.712 77.133 187.667 80.984 218.292 3.85 30.624 9.495 89.143-11.51 124.961-19.391 33.067-130.787 13.689-147.778 10.517z"
      />
      <path
        fill="#fee"
        d="M1766.36 1112.39a20.842 20.842 0 00-20.842-20.842h-417.787a20.845 20.845 0 00-14.738 6.104 20.845 20.845 0 00-6.104 14.738v264.885a20.845 20.845 0 0020.842 20.842h417.787a20.84 20.84 0 0020.842-20.842V1112.39z"
      />
      <path fill="#727272" d="M1306.85 1379.07h459.384v28.227H1306.85z" />
      <path
        fill="url(#prefix___Linear5)"
        d="M1766.36 1118.5a20.842 20.842 0 00-20.842-20.842h-417.787a20.845 20.845 0 00-14.738 6.104 20.845 20.845 0 00-6.104 14.738v259.781a20.841 20.841 0 0020.842 20.842h417.787a20.839 20.839 0 0020.842-20.842V1118.5z"
      />
      <ellipse
        cx={2052.17}
        cy={1068.71}
        fill="#3f297d"
        rx={40.481}
        ry={33.734}
      />
      <path
        fill="url(#prefix___Linear6)"
        d="M2107.75 1102.32c-.495-20.213-17.023-36.342-37.243-36.342h-35.409c-20.277 0-36.83 16.217-37.246 36.49l-6.227 303.645 123.56-.231-7.435-303.562z"
      />
      <ellipse
        cx={1231.98}
        cy={1355.5}
        fill="none"
        stroke="#5949a4"
        strokeWidth={7}
        rx={21.45}
        ry={18.943}
      />
      <path
        fill="url(#prefix___Linear7)"
        d="M1235.52 1366.86c0 2.903-.801 5.75-2.314 8.228l-14.412 23.589a15.78 15.78 0 01-13.468 7.554h-59.552a15.78 15.78 0 01-13.467-7.554l-14.412-23.589a15.78 15.78 0 01-2.314-8.228v-30.203c0-8.717 7.065-15.782 15.782-15.782h88.375c8.717 0 15.782 7.065 15.782 15.782v30.203z"
      />
      <path
        style={{ opacity: 0 }}
        ref={smoke1}
        fill="url(#prefix___Linear8)"
        d="M1167.01 1205.97s-5.371 15.12 8.481 33.798c13.853 18.679 10.614 29.317 8.181 36.98-2.67 8.411-4.091 18.891-.828 30.303 0 0 2.845-17.147 15.104-33.939 12.258-16.792-1.255-29.128-9.71-36.514-14.309-12.502-19.511-17.819-21.228-30.628z"
      />
      <path
        style={{ opacity: 0 }}
        ref={smoke2}
        fill="url(#prefix___Linear9)"
        d="M1164.08 1261.32s5.186 6.802 1.192 18.539c-3.995 11.736-.62 16.61 1.861 20.104 2.725 3.836 5.151 8.925 5.35 15.25 0 0-4.233-8.243-13.188-14.774-8.955-6.53-4.101-14.991-1.011-20.116 5.231-8.675 7.007-12.22 5.796-19.003z"
      />
      <ellipse
        cx={1574.6}
        cy={2153.36}
        fill="#c4aba9"
        rx={793.878}
        ry={8.454}
      />
      <path fill="#fff" d="M758.509 1403.88h376.286v4.974H758.509z" />
      <path
        fill="#545479"
        d="M1741.67 1500.38c0-4.713-3.826-8.539-8.539-8.539h-389.173c-4.713 0-8.54 3.826-8.54 8.539v17.078c0 4.713 3.827 8.539 8.54 8.539h389.173c4.713 0 8.539-3.826 8.539-8.539v-17.078z"
      />
      <path
        fill="#332061"
        d="M1753.61 1524.2a6.488 6.488 0 00-6.485-6.485h-417.592a6.488 6.488 0 00-6.485 6.485v12.97a6.488 6.488 0 006.485 6.485h417.592a6.488 6.488 0 006.485-6.485v-12.97z"
      />
      <ellipse
        cx={1539.15}
        cy={2088.18}
        fill="url(#prefix___Linear10)"
        rx={227.33}
        ry={30.115}
      />
      <path
        fill="#332061"
        d="M1501.04 1530.49h76.87v529.764h-76.87zm-189.3 556.22h454.77v58.79h-454.77z"
      />
      <path
        fill="url(#prefix___Linear11)"
        d="M1515.91 2061.57l16.552-44.02-77.209-23.015-17.49 39.603-2.56 13.309 54.979 24.404 25.728-10.281z"
      />
      <path
        fill="url(#prefix___Linear12)"
        d="M1519.04 2092.18a52.541 52.541 0 00-34.802-65.648l-4.025-1.235a52.534 52.534 0 00-40.031 3.805 52.532 52.532 0 00-25.616 30.997l-9.23 30.058a6.513 6.513 0 004.316 8.142l92.016 28.255a6.513 6.513 0 008.142-4.316l9.23-30.058z"
      />
      <path
        fill="#ede1e0"
        d="M1515.48 2104.73l-104.474-32.081-5.4 17.584a6.52 6.52 0 004.317 8.142l92.015 28.255a6.513 6.513 0 008.142-4.316l5.4-17.584z"
      />
      <path
        fill="url(#prefix___Linear13)"
        d="M1702.35 1459.09s-2.609 18.187-9.019 42.106c-6.411 23.918-152.216 523.429-152.216 523.429s-6.039 8.711-15.103 10.249c0 0 8.712-12.429-26.11-24.094-34.822-11.666-51.491-5.116-52.769 2.944 0 0-12.612-5.855-8.606-21.954 4.006-16.1 85.332-345.979 85.332-345.979l18.629-187.848 159.862 1.147z"
      />
      <path
        fill="url(#prefix___Linear14)"
        d="M1831.12 1903.18l-29.606-32.218-62.493 46.04 25.212 30.889 10.29 7.95 51.541-29.124 5.056-23.537z"
      />
      <path
        fill="url(#prefix___Linear15)"
        d="M1546.66 1459.49l-170.438-2.188s-4.263 15.179 5.065 32.53c9.328 17.35 77.546 92.483 77.546 92.483s268.878 351.213 279.325 353.81c10.447 2.596 14.418-.214 16.42-1.033l-6.118-6.752s33.798-43.593 62.058-46.507l6.033 4.472s8.033-6.392-6.27-26.226c-14.303-19.834-228.663-308.4-246.798-348.118-18.135-39.719-17.349-52.423-16.823-52.471z"
      />
      <path
        fill="url(#prefix___Linear16)"
        d="M1862.98 1919.76a52.535 52.535 0 00-35.985-17.946 52.534 52.534 0 00-38.135 12.755l-3.178 2.761a52.544 52.544 0 00-5.191 74.121l20.626 23.733a6.515 6.515 0 009.193.643l72.652-63.141a6.514 6.514 0 00.644-9.193l-20.626-23.733z"
      />
      <path
        fill="#ede1e0"
        d="M1871.75 1929.42l-82.489 71.69 12.066 13.884a6.518 6.518 0 009.193.644l72.652-63.142a6.516 6.516 0 00.644-9.193l-12.066-13.883z"
      />
      <path
        fill="url(#prefix___Linear17)"
        d="M1426.05 911.933c-3.725-2.632-24.459-9.541-27.045 4.274-2.587 13.816 4.886 39.557 15.392 44.626 10.506 5.07 20.385-.353 22.524-5.002 2.139-4.65-7.147-41.266-10.871-43.898z"
      />
      <path
        fill="url(#prefix___Linear18)"
        d="M1650.76 910.309c3.725-2.632 24.459-9.541 27.045 4.274 2.587 13.816-4.886 39.557-15.392 44.626-10.506 5.07-20.385-.353-22.524-5.002-2.139-4.65 7.147-41.266 10.871-43.898z"
      />
      <ellipse
        cx={1537.31}
        cy={912.445}
        fill="url(#prefix___Linear19)"
        rx={110.337}
        ry={140.958}
      />
      <path
        fill="#2b1927"
        d="M1511.34 857.511a2.295 2.295 0 012.706 2.239c.038 3.661.09 10.132.119 13.633a2.304 2.304 0 01-2.426 2.318c-7.089-.156-28.265.603-45.782 13.335 0 0-5.263-.487-3.542-5.428 1.661-4.767 24.299-21.352 48.925-26.097zm51.55-.817a2.296 2.296 0 00-2.706 2.239c-.038 3.661-.09 10.132-.119 13.633a2.305 2.305 0 002.426 2.318c7.089-.155 28.265.603 45.782 13.335 0 0 5.263-.486 3.542-5.427-1.661-4.768-24.299-21.353-48.925-26.098z"
      />
      <ellipse
        cx={1494.02}
        cy={919.385}
        fill="#120000"
        rx={20.739}
        ry={20.478}
      />
      <ellipse
        cx={1580.51}
        cy={919.611}
        fill="#120000"
        rx={20.739}
        ry={20.478}
      />
      <ellipse
        cx={1494.56}
        cy={921.113}
        fill="#fcfdff"
        rx={20.739}
        ry={20.478}
      />
      <ellipse
        cx={1579.97}
        cy={921.34}
        fill="#fcfdff"
        rx={20.739}
        ry={20.478}
      />
      <ellipse cx={1494.82} cy={923.415} fill="#34302d" rx={12.205} ry={13.8} />
      <ellipse cx={1579.71} cy={923.641} fill="#34302d" rx={12.205} ry={13.8} />
      <path
        fill="#050604"
        stroke="#050604"
        strokeWidth={1.7}
        d="M1494.87 978.004s38.141 17.359 85.128.422c0 0-2.652 42.796-42.652 43.341-40.001.544-42.476-43.763-42.476-43.763z"
      />
      <path
        fill="#fffbfd"
        d="M1497.34 978.256s-2.489 19.568 39.293 19.543c41.68-.024 40.236-19.085 40.236-19.085-16.427 5.093-25.707 6.081-39.276 6.312-18.952-1.017-21.258-.906-40.253-6.77z"
      />
      <path
        fill="#4d292d"
        d="M1649.24 910.767s39.14-166.094-128.169-172.025l22.266 8.799s-73.72-7.157-103.907 6.482c0 0-2.803 8.993 9.998 28.683 0 0-34.577 20.251-23.83 128.817 0 0 4.406-66.49 41.452-105.486 0 0 51.579 49.951 136.662-3.571 0 0 33.673 25.326 45.528 108.301z"
      />
      <path
        fill="none"
        stroke="#120000"
        strokeWidth={1.3}
        d="M1520.28 954.909s-3.678 5.202 1.409 8.885c0 0 4.522-.108 5.911.65 1.389.758 2.988 3.828 7.785 4.392 4.797.563 8.411-1.886 10.396-3.973 1.986-2.087 7.288-1.219 7.993-3.909.705-2.689-1.262-6.646-3.694-8.336"
      />
      <path
        d="M1537.1 1235.22s-1.642-10.269 9.956-12.475c0 0 .059 10.387-9.956 12.475zm-9.33.55s-14.225 1.663-12.288 17.837c1.937 16.174 9.809 19.615 11.263 20.118 1.454.504 4.346.164 6.807-.834 2.461-.999 5.92-.384 9.888.788 3.967 1.171 6.598-.784 8.73-2.833 2.133-2.049 5.017-7.13 5.765-9.161 0 0-7.69-3.448-7.203-10.644.487-7.196 4.802-9.034 5.633-10.003.831-.968-5.182-5.716-9.472-5.333-4.29.383-5.446 1.953-7.095 2.146-1.649.194-4.127.387-6.266-.613-2.138-1-3.036-1.778-5.762-1.468z"
        fill="#08070d"
      />
      <path
        fill="url(#prefix___Linear20)"
        d="M2024.9 1128.36a4.69 4.69 0 00-4.609-4.766h-.003a4.688 4.688 0 00-4.765 4.609l-3.847 229.744a4.688 4.688 0 004.609 4.765l.003.001a4.693 4.693 0 003.337-1.318 4.682 4.682 0 001.428-3.291l3.847-229.744z"
      />
      <clipPath id="prefix__a">
        <path d="M2075.22 1080.82a1.877 1.877 0 001.772-1.876v-.001a1.67 1.67 0 00-1.765-1.669l-12.191.683c-6.57.368-13.156.366-19.725-.006l-11.686-.662a1.695 1.695 0 00-1.789 1.692v.001c0 .982.767 1.793 1.747 1.849l11.815.666c6.57.371 13.155.372 19.724.002l12.098-.679z" />
      </clipPath>
      <g clipPath="url(#prefix__a)">
        <use
          width={47.157}
          height={4.504}
          x={2066.13}
          y={1195.86}
          transform="scale(.98243 .90084)"
          xlinkHref="#prefix___Image22"
        />
      </g>
      <clipPath id="prefix__b">
        <path d="M2058.33 1049.02a.844.844 0 00.74-.838v-.351a.706.706 0 00-.791-.699 39.69 39.69 0 01-9.862-.009l-.121-.016a.493.493 0 00-.556.49v.766c0 .325.242.598.564.639l.104.013a39.93 39.93 0 009.922.005z" />
      </clipPath>
      <g clipPath="url(#prefix__b)">
        <use
          width={11.33}
          height={2.224}
          x={2168.81}
          y={1412.68}
          transform="scale(.94418 .74121)"
          xlinkHref="#prefix___Image24"
        />
      </g>
      <path
        fill="url(#prefix___Linear25)"
        d="M959.987 1449.68l-139.175 412.752-78.604 243.071s-16.197 42.184 9.474 47.583c25.67 5.399 29.165-19.511 38.923-45.515 9.757-26.004 265.093-664.298 265.093-664.298l-95.711 6.407z"
      />
      <path
        fill="url(#prefix___Linear26)"
        d="M2185.45 1452.38l139.175 412.752 78.604 243.071s16.197 42.184-9.474 47.583c-25.67 5.399-29.165-19.511-38.923-45.515-9.757-26.004-265.093-664.298-265.093-664.298l95.711 6.407z"
      />
      <path
        fill="url(#prefix___Linear27)"
        d="M739.14 1408.11l1629.4-2.033.845 52.397-1630.44 2.153.198-52.517z"
      />
      <path fill="#e59772" d="M739.359 1405.96h1629.45v21.09H739.359z" />
      <defs>
        <linearGradient
          id="prefix___Linear1"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(-140.256 1537.872 528.259) scale(2127.41)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ce9ffc" />
          <stop offset={1} stopColor="#68369a" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear2"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(70.4 761.134 2187.55) scale(710.013)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ce9ffc" />
          <stop offset={1} stopColor="#68369a" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear3"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(104.103 869.816 1679.952) scale(194.4295)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ce9ffc" />
          <stop offset={1} stopColor="#68369a" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear4"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(-92.178 1293.954 -198.227) scale(91.42714)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#77eaf7" />
          <stop offset={1} stopColor="#00daf2" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear5"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(89.925 246.922 1293.11) scale(759.75964)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#8f9396" />
          <stop offset={1} stopColor="#425f76" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear6"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(71.9 314.836 1845.568) scale(448.017)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#3f297d" />
          <stop offset={0.55} stopColor="#372272" />
          <stop offset={1} stopColor="#1a0a48" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear7"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(90.471 -72.773 1249.814) scale(116.21193)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#5949a4" />
          <stop offset={1} stopColor="#291971" />
        </linearGradient>

        <linearGradient
          id="prefix___Linear8"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(89.742 -16.734 1198.86) scale(96.28398)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.5} stopColor="#f3e8e4" />
          <stop offset={1} stopColor="#cfa493" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear9"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(90.164 -46.29 1207.927) scale(54.22802)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.53} stopColor="#f4eae7" />
          <stop offset={1} stopColor="#cfa393" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear10"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(89.587 -267.435 1807.725) scale(36.65)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#624b93" />
          <stop offset={0.5} stopColor="#563f87" />
          <stop offset={1} stopColor="#321b64" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear11"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(-68.605 2233.81 -65.166) scale(50.0115)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#b07c41" />
          <stop offset={1} stopColor="#794a15" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear12"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(-87.212 1834.91 259.713) scale(63.70169)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#59b1bc" />
          <stop offset={1} stopColor="#1c828f" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear13"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(-137.712 1207.342 602.365) scale(375.675)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#702052" />
          <stop offset={1} stopColor="#3a0627" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear14"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(-131.541 1325.723 553.977) scale(39.5059)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#b07c41" />
          <stop offset={1} stopColor="#794a15" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear15"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(-34.536 3492.309 -1672.101) scale(158.4029)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#702052" />
          <stop offset={1} stopColor="#3a0627" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear16"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(-88.336 1908.258 44.49) scale(75.86051)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#59b1bc" />
          <stop offset={1} stopColor="#1c828f" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear17"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(35.128 -755.509 2700.819) scale(121.9626)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f0b57b" />
          <stop offset={1} stopColor="#bc1a12" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear18"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(141.462 672.45 752.372) scale(132.8418)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f0b57b" />
          <stop offset={1} stopColor="#bc1a12" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear19"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(89.907 343.764 1196.003) scale(391.01951)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f0b57b" />
          <stop offset={0.54} stopColor="#f0a760" />
          <stop offset={1} stopColor="#ef7700" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear20"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(90.965 473.865 1539.574) scale(284.31534)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" stopOpacity={0.13} />
          <stop offset={0.44} stopColor="#c5bed8" stopOpacity={0.12} />
          <stop offset={1} stopColor="#3f297d" stopOpacity={0.11} />
        </linearGradient>
        <linearGradient
          id="prefix___Linear25"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(-69.911 1918.013 546.753) scale(795.856)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ca6646" />
          <stop offset={0.59} stopColor="#c05c3c" />
          <stop offset={0.81} stopColor="#ab4726" />
          <stop offset={1} stopColor="#963110" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear26"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(-109.669 1953.634 232.048) scale(772.677)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d16b4a" />
          <stop offset={0.53} stopColor="#c45e3d" />
          <stop offset={1} stopColor="#963110" />
        </linearGradient>
        <linearGradient
          id="prefix___Linear27"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="rotate(88.925 42.926 1477.22) scale(89.95093)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#e07350" />
          <stop offset={1} stopColor="#bb3105" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgProgrammer;
