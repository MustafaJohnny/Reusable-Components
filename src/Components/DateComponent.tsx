import { useState, useEffect, useRef } from "react";
import { FiCalendar } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import { Calendar } from "react-date-range";
import { ru } from "date-fns/locale";
import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  Box,
  Input,
  VStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

export default function DateComponent() {
  const calendarTarget = useRef<HTMLInputElement>(null);
  const [calendar, setCalendar] = useState("");
  const [open, setOpen] = useState(false);

  const handleSelect = (date: any) => {
    setCalendar(format(date, "dd.MM.yyyy"));
    setOpen(!open);
  };

  const hideOnClickOutside = (e: any | null) => {
    if (calendarTarget.current && !calendarTarget.current?.contains(e.target))
      setOpen(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", hideOnClickOutside, true);
  }, []);

  return (
    <VStack maxW="800px" mx="auto" align="center" spacing="6" paddingTop="20">
      <InputGroup
        onClick={() => setOpen(!open)}
        transition="all 0.4s ease-out"
        cursor="pointer"
        width="240px"
      >
        <InputLeftElement children={<FiCalendar color="#3782AF" size={15} />} />
        <Input
          border={open ? "1px solid #509CC8" : "1px solid transparent"}
          transition="all 0.4s ease-out"
          backgroundColor="#F7FAFC"
          placeholder="ДД.ММ.ГГГГ"
          cursor="pointer"
          color="#484A6A;"
          fontWeight="400"
          value={calendar}
          fontSize="14"
          readOnly
          _placeholder={{
            color: "#9598B1",
          }}
        />

        <InputRightElement
          transform={open ? "rotate(180deg)" : ""}
          transition="all 0.4s ease-out"
          children={
            <FaCaretDown size={15} color={open ? "#3782AF" : "#595B83"} />
          }
        />
      </InputGroup>

      {open && (
        <Box
          border="1px solid #509CC8"
          transition="all 0.4s"
          ref={calendarTarget}
          borderRadius="8px"
          padding="5px"
        >
          <Calendar
            onChange={handleSelect}
            date={new Date()}
            color="#3782AF"
            locale={ru}
          />
        </Box>
      )}
    </VStack>
  );
}
