import React, { useEffect, useState } from "react";
import { Popover, Overlay, Form } from "react-bootstrap";
import styled from "styled-components";
import CalenderTable from "./CalenderTable";
import NextMonthButton from "./NextMonthButton";
import PrevMonthButton from "./PrevMonthButton";
import YearMonthPart from "./YearMonthPart";

const StyledPopover = styled(Popover)``;

const CalenderHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

type Props = {
  onChangeDate: (year: number, month: number, day: number) => void;
};

export default function Calender(props: Props) {
  const [year, setYear] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  // popover用
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);

  const handleShow = (e: any) => {
    setShow(!show);
    setTarget(e.target);
  };

  const handleClose = () => {
    setShow(false);
    setTarget(null);
  };

  const initCalender = () => {
    const todayDate = new Date();
    const year = todayDate.getFullYear();
    const month = todayDate.getMonth() + 1;
    setYear(year);
    setMonth(month);
  };

  const setNextMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  const setPrevMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  // 1回のみ実行させるための変数
  let initCalenderPrepared = false;
  useEffect(() => {
    if (!initCalenderPrepared) {
      initCalender();
      initCalenderPrepared = true;
    }
  }, []);
  return (
    <>
      <Form.Control type="date" onClick={handleShow} />
      <Overlay show={show} target={target} placement="bottom">
        <StyledPopover id="popover-basic">
          <StyledPopover.Body>
            <CalenderHeader>
              <PrevMonthButton setPrevMonth={setPrevMonth} />
              <YearMonthPart year={year} month={month} />
              <NextMonthButton setNextMonth={setNextMonth} />
            </CalenderHeader>
            <CalenderTable
              yaer={year}
              month={month}
              onChangeDate={props.onChangeDate}
              onClickClose={handleClose}
            />
          </StyledPopover.Body>
        </StyledPopover>
      </Overlay>
    </>
  );
}
