// import React from "react";

// interface NavbarItemProps {
//   label: string;
//   active?: boolean;
// }

// const NavbarItem: React.FC<NavbarItemProps> = ({ label, active }) => {
//   return (
//     <div
//       className={
//         active
//           ? "text-white cursor-default"
//           : "text-gray-200 hover:text-gray-300 cursor-pointer transition"
//       }
//     >
//       {label}
//     </div>
//   );
// };

// export default NavbarItem;

import React from "react";

interface NavbarItemProps {
  label: string;
  active?: boolean;
  lmaov?: () => void;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active, lmaov }) => {
  return (
    <div
      className={
        active
          ? "text-white cursor-default"
          : "text-gray-200 hover:text-gray-300 cursor-pointer transition"
      }
      onClick={lmaov}
    >
      {label}
    </div>
  );
};

export default NavbarItem;
