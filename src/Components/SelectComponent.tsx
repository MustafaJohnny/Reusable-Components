import ReactSelect, { components } from "react-select";
import { FaCaretDown } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function SelectDrop() {
  return (
    <>
      <ReactSelect
        isClearable={true}
        options={options}
        styles={{
          control: (styles: any, state: any) => ({
            ...styles,
            fontSize: "14px",
            fontWeight: "400",
            border:
              state.isFocused && !state.hasValue
                ? "1px solid #509CC8"
                : "1px solid transparent",
            boxShadow:
              state.isFocused && !state.hasValue
                ? "0px 0px 15px rgba(40, 93, 123, 0.1)"
                : 0,
            "&:hover": {
              border:
                state.isFocused && !state.hasValue
                  ? "1px solid #509CC8"
                  : "1px solid transparent",
            },

            width: 245,
            height: 42,
            borderRadius: 8,
            paddingRight: 10,
            transition: "all 0.4s ease-out",
            backgroundColor:
              state.isFocused && !state.hasValue ? "#fff" : "#F7FAFC",
          }),

          dropdownIndicator: (styles: any, state: any) => ({
            ...styles,
            color: "#595B83",
            transition: "all 0.3s ease-out",
            transform:
              state.isFocused && !state.hasValue
                ? "rotate(180deg)"
                : "rotate(0deg)",
            padding: 0,
          }),

          clearIndicator: (styles: any, state: any) => ({
            ...styles,
            padding: "0 4px 0 0",
            color: "#484A6A",
          }),
        }}
        components={{
          IndicatorSeparator: null,
          DropdownIndicator: (p: any) => (
            <components.DropdownIndicator {...p}>
              <FaCaretDown size={18} />
            </components.DropdownIndicator>
          ),

          ClearIndicator: (p: any) => (
            <components.ClearIndicator {...p}>
              <FiX size={18} />
            </components.ClearIndicator>
          ),
        }}
      />
    </>
  );
}
