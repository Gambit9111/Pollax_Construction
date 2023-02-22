import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    // mobile
    <>
      <footer className="flex h-24 w-full flex-col bg-my-white xl:hidden">
        <div className="flex h-full w-full items-center justify-center gap-6">
          {/* facebook logo */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M37.5 20.1055C37.5 10.4414 29.6641 2.60547 20 2.60547C10.3359 2.60547 2.5 10.4414 2.5 20.1055C2.5 28.8398 8.89844 36.0797 17.2656 37.3937V25.1656H12.8211V20.1055H17.2656V16.25C17.2656 11.8648 19.8789 9.44062 23.8758 9.44062C25.7906 9.44062 27.7938 9.78281 27.7938 9.78281V14.0898H25.5859C23.4133 14.0898 22.7336 15.4383 22.7336 16.8242V20.1055H27.5867L26.8117 25.1656H22.7344V37.3953C31.1016 36.082 37.5 28.8422 37.5 20.1055Z"
              fill="#150C07"
            />
          </svg>
          {/* linked in icon */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.7008 2.5H5.49062C3.89453 2.5 2.5 3.64844 2.5 5.22578V34.5008C2.5 36.0867 3.89453 37.5 5.49062 37.5H34.6922C36.2969 37.5 37.5 36.0773 37.5 34.5008V5.22578C37.5094 3.64844 36.2969 2.5 34.7008 2.5ZM13.3492 31.6742H8.33516V16.0844H13.3492V31.6742ZM11.0156 13.7141H10.9797C9.375 13.7141 8.33594 12.5195 8.33594 11.0242C8.33594 9.50156 9.40234 8.33516 11.043 8.33516C12.6836 8.33516 13.6875 9.49297 13.7234 11.0242C13.7227 12.5195 12.6836 13.7141 11.0156 13.7141ZM31.6742 31.6742H26.6602V23.15C26.6602 21.1078 25.9305 19.7125 24.1164 19.7125C22.7305 19.7125 21.9102 20.65 21.5453 21.5633C21.4086 21.8914 21.3719 22.3383 21.3719 22.7945V31.6742H16.3578V16.0844H21.3719V18.2539C22.1016 17.2148 23.2414 15.7195 25.8937 15.7195C29.1852 15.7195 31.675 17.8891 31.675 22.5664L31.6742 31.6742Z"
              fill="#150C07"
            />
          </svg>
          {/* twitter icon */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.75 8.5547C37.3433 9.16591 35.855 9.56859 34.332 9.75001C35.9326 8.81281 37.1362 7.32389 37.7172 5.56251C36.204 6.44735 34.5512 7.06819 32.8297 7.39845C32.1048 6.63871 31.2329 6.03431 30.2671 5.622C29.3014 5.20969 28.2618 4.99807 27.2117 5.00001C22.9602 5.00001 19.5195 8.39064 19.5195 12.5703C19.5165 13.1517 19.5831 13.7314 19.718 14.2969C16.6693 14.154 13.684 13.3763 10.9531 12.0135C8.22222 10.6507 5.80585 8.73295 3.85859 6.38283C3.17545 7.53448 2.81417 8.84848 2.8125 10.1875C2.8125 12.8125 4.18203 15.1328 6.25 16.4922C5.02479 16.4631 3.82468 16.1388 2.75156 15.5469V15.6406C2.75156 19.3125 5.40781 22.3672 8.92344 23.0625C8.26233 23.2388 7.58107 23.328 6.89687 23.3281C6.41139 23.329 5.92701 23.2819 5.45078 23.1875C6.42812 26.1953 9.27266 28.3828 12.6422 28.4453C9.9042 30.5554 6.54267 31.6959 3.08594 31.6875C2.47236 31.6866 1.85935 31.6501 1.25 31.5781C4.76655 33.8236 8.85425 35.0114 13.0266 35C27.1953 35 34.9359 23.461 34.9359 13.4531C34.9359 13.125 34.9273 12.7969 34.9117 12.4766C36.4141 11.4079 37.7139 10.0798 38.75 8.5547Z"
              fill="#150C07"
            />
          </svg>
          {/* whatsapp icon */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.4008 7.58596C30.7829 5.96726 28.8608 4.68456 26.7451 3.8117C24.6295 2.93884 22.3621 2.49306 20.0734 2.50002C10.4688 2.50002 2.65 10.2797 2.64609 19.8438C2.64184 22.8892 3.44461 25.8813 4.97266 28.5156L2.5 37.5L11.7383 35.0883C14.2955 36.4736 17.1581 37.1987 20.0664 37.1977H20.0734C29.6773 37.1977 37.4953 29.4172 37.5 19.8539C37.5058 17.5731 37.058 15.3139 36.1826 13.2078C35.3071 11.1017 34.0216 9.19065 32.4008 7.58596ZM20.0734 34.2703H20.0672C17.4745 34.2711 14.929 33.5773 12.6953 32.261L12.1664 31.9485L6.68437 33.3797L8.14766 28.0602L7.80312 27.5133C6.35343 25.2181 5.58535 22.5584 5.58828 19.8438C5.58828 11.8961 12.0891 5.42971 20.0789 5.42971C23.9117 5.42286 27.5903 6.93872 30.3055 9.64386C33.0208 12.349 34.5504 16.0219 34.5578 19.8547C34.5547 27.8031 28.057 34.2703 20.0734 34.2703ZM28.018 23.4742C27.5828 23.2571 25.4398 22.2086 25.043 22.0641C24.6461 21.9196 24.3531 21.8469 24.0633 22.2813C23.7734 22.7156 22.9383 23.6875 22.6844 23.9805C22.4305 24.2735 22.1766 24.3055 21.7414 24.0883C21.3063 23.8711 19.9023 23.4141 18.2391 21.9375C16.9445 20.7883 16.0711 19.3696 15.8172 18.936C15.5633 18.5024 15.7898 18.2672 16.0078 18.0516C16.2039 17.857 16.443 17.5453 16.6609 17.2922C16.8789 17.0391 16.9516 16.8578 17.0961 16.5688C17.2406 16.2797 17.1687 16.0266 17.0602 15.8102C16.9516 15.5938 16.0805 13.4602 15.718 12.5922C15.3641 11.7469 15.0055 11.8617 14.7383 11.8485C14.4844 11.836 14.1914 11.8328 13.9031 11.8328C13.6827 11.8386 13.4659 11.8897 13.2662 11.983C13.0664 12.0762 12.888 12.2097 12.7422 12.375C12.343 12.8094 11.218 13.8594 11.218 15.9906C11.218 18.1219 12.7805 20.1844 12.9961 20.4735C13.2117 20.7625 16.0664 25.1399 20.4344 27.0172C21.2455 27.3646 22.0742 27.6691 22.9172 27.9297C23.9602 28.2594 24.9094 28.2133 25.6594 28.1016C26.4961 27.9774 28.2375 27.0531 28.5992 26.0406C28.9609 25.0281 28.9617 24.161 28.8531 23.9805C28.7445 23.8 28.4539 23.6906 28.018 23.4742Z"
              fill="#150C07"
            />
          </svg>
        </div>
        <div className="relative flex h-10 w-full items-end bg-my-orange">
          <span className="absolute top-[0.5rem] h-[1px] w-[300px] bg-black" />
          <p className="px-6 pb-1 text-xs font-light tracking-wider">
            2023 Gucci Gang™
          </p>
        </div>
      </footer>
      {/* desktop */}
      <footer className="fixed bottom-0 hidden h-10 w-full bg-my-orange xl:flex wide:h-12">
        <div className="relative flex h-full w-full items-end justify-between">
          <span className="absolute top-[0.4rem] h-[1px] w-9/12 bg-black" />
          <p className="px-6 pb-1 tracking-wider wide:text-lg">
            2023 Gucci Gang™
          </p>
          <div className="flex gap-4 px-6 pb-1">
            {/* facebook logo */}
            <svg
              className="h-8 w-8 wide:h-10 wide:w-10"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M37.5 20.1055C37.5 10.4414 29.6641 2.60547 20 2.60547C10.3359 2.60547 2.5 10.4414 2.5 20.1055C2.5 28.8398 8.89844 36.0797 17.2656 37.3937V25.1656H12.8211V20.1055H17.2656V16.25C17.2656 11.8648 19.8789 9.44062 23.8758 9.44062C25.7906 9.44062 27.7938 9.78281 27.7938 9.78281V14.0898H25.5859C23.4133 14.0898 22.7336 15.4383 22.7336 16.8242V20.1055H27.5867L26.8117 25.1656H22.7344V37.3953C31.1016 36.082 37.5 28.8422 37.5 20.1055Z"
                fill="#150C07"
              />
            </svg>
            {/* linked in icon */}
            <svg
              className="h-8 w-8 wide:h-10 wide:w-10"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.7008 2.5H5.49062C3.89453 2.5 2.5 3.64844 2.5 5.22578V34.5008C2.5 36.0867 3.89453 37.5 5.49062 37.5H34.6922C36.2969 37.5 37.5 36.0773 37.5 34.5008V5.22578C37.5094 3.64844 36.2969 2.5 34.7008 2.5ZM13.3492 31.6742H8.33516V16.0844H13.3492V31.6742ZM11.0156 13.7141H10.9797C9.375 13.7141 8.33594 12.5195 8.33594 11.0242C8.33594 9.50156 9.40234 8.33516 11.043 8.33516C12.6836 8.33516 13.6875 9.49297 13.7234 11.0242C13.7227 12.5195 12.6836 13.7141 11.0156 13.7141ZM31.6742 31.6742H26.6602V23.15C26.6602 21.1078 25.9305 19.7125 24.1164 19.7125C22.7305 19.7125 21.9102 20.65 21.5453 21.5633C21.4086 21.8914 21.3719 22.3383 21.3719 22.7945V31.6742H16.3578V16.0844H21.3719V18.2539C22.1016 17.2148 23.2414 15.7195 25.8937 15.7195C29.1852 15.7195 31.675 17.8891 31.675 22.5664L31.6742 31.6742Z"
                fill="#150C07"
              />
            </svg>
            {/* twitter icon */}
            <svg
              className="h-8 w-8 wide:h-10 wide:w-10"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.75 8.5547C37.3433 9.16591 35.855 9.56859 34.332 9.75001C35.9326 8.81281 37.1362 7.32389 37.7172 5.56251C36.204 6.44735 34.5512 7.06819 32.8297 7.39845C32.1048 6.63871 31.2329 6.03431 30.2671 5.622C29.3014 5.20969 28.2618 4.99807 27.2117 5.00001C22.9602 5.00001 19.5195 8.39064 19.5195 12.5703C19.5165 13.1517 19.5831 13.7314 19.718 14.2969C16.6693 14.154 13.684 13.3763 10.9531 12.0135C8.22222 10.6507 5.80585 8.73295 3.85859 6.38283C3.17545 7.53448 2.81417 8.84848 2.8125 10.1875C2.8125 12.8125 4.18203 15.1328 6.25 16.4922C5.02479 16.4631 3.82468 16.1388 2.75156 15.5469V15.6406C2.75156 19.3125 5.40781 22.3672 8.92344 23.0625C8.26233 23.2388 7.58107 23.328 6.89687 23.3281C6.41139 23.329 5.92701 23.2819 5.45078 23.1875C6.42812 26.1953 9.27266 28.3828 12.6422 28.4453C9.9042 30.5554 6.54267 31.6959 3.08594 31.6875C2.47236 31.6866 1.85935 31.6501 1.25 31.5781C4.76655 33.8236 8.85425 35.0114 13.0266 35C27.1953 35 34.9359 23.461 34.9359 13.4531C34.9359 13.125 34.9273 12.7969 34.9117 12.4766C36.4141 11.4079 37.7139 10.0798 38.75 8.5547Z"
                fill="#150C07"
              />
            </svg>
            {/* whatsapp icon */}
            <svg
              className="h-8 w-8 wide:h-10 wide:w-10"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.4008 7.58596C30.7829 5.96726 28.8608 4.68456 26.7451 3.8117C24.6295 2.93884 22.3621 2.49306 20.0734 2.50002C10.4688 2.50002 2.65 10.2797 2.64609 19.8438C2.64184 22.8892 3.44461 25.8813 4.97266 28.5156L2.5 37.5L11.7383 35.0883C14.2955 36.4736 17.1581 37.1987 20.0664 37.1977H20.0734C29.6773 37.1977 37.4953 29.4172 37.5 19.8539C37.5058 17.5731 37.058 15.3139 36.1826 13.2078C35.3071 11.1017 34.0216 9.19065 32.4008 7.58596ZM20.0734 34.2703H20.0672C17.4745 34.2711 14.929 33.5773 12.6953 32.261L12.1664 31.9485L6.68437 33.3797L8.14766 28.0602L7.80312 27.5133C6.35343 25.2181 5.58535 22.5584 5.58828 19.8438C5.58828 11.8961 12.0891 5.42971 20.0789 5.42971C23.9117 5.42286 27.5903 6.93872 30.3055 9.64386C33.0208 12.349 34.5504 16.0219 34.5578 19.8547C34.5547 27.8031 28.057 34.2703 20.0734 34.2703ZM28.018 23.4742C27.5828 23.2571 25.4398 22.2086 25.043 22.0641C24.6461 21.9196 24.3531 21.8469 24.0633 22.2813C23.7734 22.7156 22.9383 23.6875 22.6844 23.9805C22.4305 24.2735 22.1766 24.3055 21.7414 24.0883C21.3063 23.8711 19.9023 23.4141 18.2391 21.9375C16.9445 20.7883 16.0711 19.3696 15.8172 18.936C15.5633 18.5024 15.7898 18.2672 16.0078 18.0516C16.2039 17.857 16.443 17.5453 16.6609 17.2922C16.8789 17.0391 16.9516 16.8578 17.0961 16.5688C17.2406 16.2797 17.1687 16.0266 17.0602 15.8102C16.9516 15.5938 16.0805 13.4602 15.718 12.5922C15.3641 11.7469 15.0055 11.8617 14.7383 11.8485C14.4844 11.836 14.1914 11.8328 13.9031 11.8328C13.6827 11.8386 13.4659 11.8897 13.2662 11.983C13.0664 12.0762 12.888 12.2097 12.7422 12.375C12.343 12.8094 11.218 13.8594 11.218 15.9906C11.218 18.1219 12.7805 20.1844 12.9961 20.4735C13.2117 20.7625 16.0664 25.1399 20.4344 27.0172C21.2455 27.3646 22.0742 27.6691 22.9172 27.9297C23.9602 28.2594 24.9094 28.2133 25.6594 28.1016C26.4961 27.9774 28.2375 27.0531 28.5992 26.0406C28.9609 25.0281 28.9617 24.161 28.8531 23.9805C28.7445 23.8 28.4539 23.6906 28.018 23.4742Z"
                fill="#150C07"
              />
            </svg>
          </div>
        </div>
      </footer>
    </>
  );
}
