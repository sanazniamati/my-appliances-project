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

export const CommentIcon: React.FC<Props> = ({ width = 32, height = 32, color = "white" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
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
