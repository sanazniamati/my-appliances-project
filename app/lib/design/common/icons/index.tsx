/** @format */

export const LeftArrowIcon: React.FC<Props> = ({ width = 12, height = 12 }) => {
  return (
    <svg width={`${height}`} height={`${width}`} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.16667 10.375L1 6M1 6L5.16667 1.625M1 6H11"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const LeftArrowContainIcon: React.FC<Props> = ({ width = 20, height = 20 }) => {
  return (
    <svg width={`${height}`} height={`${width}`} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.16667 10.375L1 6M1 6L5.16667 1.625M1 6H11"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CommentIcon: React.FC<Props> = ({ width = 32, height = 32 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.99993 15C3.99993 8.37258 9.37252 3 15.9999 3C22.6273 3 27.9999 8.37258 27.9999 15C27.9999 21.6274 22.6273 27 15.9999 27C14.1935 27 12.4434 26.5997 10.851 25.8421L10.4839 25.659L5.24248 26.9701C4.54675 27.1441 3.91325 26.5541 4.00857 25.8668L4.02977 25.7575L5.33893 20.514C4.52654 18.9455 4.06833 17.2127 4.00702 15.4158L3.99993 15ZM25.9999 15C25.9999 9.47715 21.5228 5 15.9999 5C10.4771 5 5.99993 9.47715 5.99993 15C5.99993 16.7386 6.44333 18.4105 7.27583 19.8917C7.40095 20.1144 7.43616 20.3764 7.37424 20.6242L6.37393 24.625L10.3751 23.6254C10.5815 23.5737 10.798 23.5896 10.9932 23.6687L11.1076 23.7238C12.589 24.5565 14.2611 25 15.9999 25C21.5228 25 25.9999 20.5228 25.9999 15Z"
        fill="#464646"
      />
      <path
        d="M11 18C10.4477 18 10 17.5523 10 17C10 16.4872 10.386 16.0645 10.8834 16.0067L11 16H17C17.5523 16 18 16.4477 18 17C18 17.5128 17.614 17.9355 17.1166 17.9933L17 18H11Z"
        fill="#464646"
      />
      <path
        d="M11 14C10.4477 14 10 13.5523 10 13C10 12.4872 10.386 12.0645 10.8834 12.0067L11 12L21 12C21.5523 12 22 12.4477 22 13C22 13.5128 21.614 13.9355 21.1166 13.9933L21 14H11Z"
        fill="#464646"
      />
    </svg>
  );
};

export const SignInSquareIcon: React.FC<Props> = ({ width = 24, height = 24, color = "white" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 7.13193V6.61204C7 4.46614 7 3.3932 7.6896 2.79511C8.37919 2.19703 9.44136 2.34877 11.5657 2.65224L15.8485 3.26408C18.3047 3.61495 19.5327 3.79039 20.2664 4.63628C21 5.48217 21 6.72271 21 9.20377V14.7962C21 17.2773 21 18.5178 20.2664 19.3637C19.5327 20.2096 18.3047 20.385 15.8485 20.7359L11.5657 21.3478C9.44136 21.6512 8.37919 21.803 7.6896 21.2049C7 20.6068 7 19.5339 7 17.388V17.066"
        stroke={color}
        stroke-width="2"
      />
      <path
        d="M16 12L16.7809 11.3753L17.2806 12L16.7809 12.6247L16 12ZM4 13C3.44771 13 3 12.5523 3 12C3 11.4477 3.44771 11 4 11V13ZM12.7809 6.3753L16.7809 11.3753L15.2191 12.6247L11.2191 7.6247L12.7809 6.3753ZM16.7809 12.6247L12.7809 17.6247L11.2191 16.3753L15.2191 11.3753L16.7809 12.6247ZM16 13H4V11H16V13Z"
        fill={color}
      />
    </svg>
  );
};

export const ShoppingCartFullIcon: React.FC<Props> = ({ width = 24, height = 24, color = "white" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_23461)">
        <g clip-path="url(#clip1_1_23461)">
          <path
            d="M19.5 17.0001H9.19456C8.38525 17.0001 7.9806 17.0001 7.70084 16.763C7.42107 16.526 7.35462 16.1268 7.22171 15.3285L5.77829 6.65861C5.64538 5.8603 5.57893 5.46114 5.29916 5.2241C5.0194 4.98707 4.61475 4.98707 3.80544 4.98707H3M5.85715 7.00006L17.1648 6.99321C18.8691 6.99218 19.7213 6.99167 20.2672 7.42352C20.4995 7.60729 20.6881 7.84036 20.8194 8.10591C21.1278 8.72993 20.9495 9.56321 20.5928 11.2298V11.2298C20.3503 12.363 20.2291 12.9296 19.8837 13.3218C19.7346 13.4911 19.5579 13.634 19.3611 13.7444C18.9053 14.0001 18.3259 14.0001 17.167 14.0001H7.00054"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z"
            fill={color}
          />
          <path
            d="M10.5 20.5C10.5 21.3284 9.82843 22 9 22C8.17157 22 7.5 21.3284 7.5 20.5C7.5 19.6716 8.17157 19 9 19C9.82843 19 10.5 19.6716 10.5 20.5Z"
            fill={color}
          />
        </g>
        <path
          d="M13 3C10.303 3 8.49663 3.2969 7.80976 5.0346C7.52252 5.76129 7.3789 6.12464 7.67653 6.56232C7.97416 7 8.48278 7 9.5 7H16.5C17.5172 7 18.0258 7 18.3235 6.56232C18.6211 6.12464 18.4775 5.76129 18.1902 5.0346C17.5034 3.2969 15.697 3 13 3Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_23461">
          <rect width="24" height="24" fill={color} />
        </clipPath>
        <clipPath id="clip1_1_23461">
          <rect width="24" height="24" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowDownIcon: React.FC<Props> = ({ width = 12, height = 12, color = "black" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.375 6.83333L6 11M6 11L1.625 6.83333M6 11L6 1"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const LikeEmptyIcon: React.FC<Props> = ({ width = 22, height = 20 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.69C1 3.6 3.49 1.1 6.56 1.1C8.38 1.1 9.99 1.98 11 3.34C12.01 1.98 13.63 1.1 15.44 1.1C18.51 1.1 21 3.6 21 6.69C21 13.69 14.52 17.82 11.62 18.81Z"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const LikeFillIcon: React.FC<Props> = ({ width = 22, height = 20, color = "black" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.69C1 3.6 3.49 1.1 6.56 1.1C8.38 1.1 9.99 1.98 11 3.34C12.01 1.98 13.63 1.1 15.44 1.1C18.51 1.1 21 3.6 21 6.69C21 13.69 14.52 17.82 11.62 18.81Z"
        fill="#EB5050"
        stroke="#EB5050"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ReplyCommentIcon: React.FC<Props> = ({ width = 20, height = 20, color = "blue" }) => {
  return (
    <svg
      cursor={"pointer"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
      fill={color}
    >
      <path d="M8.3 189.8L184.3 37.9C199.7 24.5 224 35.3 224 56v80.1c160.6 1.8 288 34 288 186.3 0 61.4-39.6 122.3-83.3 154.1-13.7 9.9-33.1-2.5-28.1-18.6 45.3-145-21.5-183.5-176.6-185.7V360c0 20.7-24.3 31.5-39.7 18.2l-176-152c-11.1-9.6-11.1-26.8 0-36.3z" />
    </svg>
  );
};
