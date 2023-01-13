import React, { useEffect, useState } from "react";
import styled from "styled-components";

const weeks = ["日", "月", "火", "水", "木", "金", "土"];

type Props = {
  yaer: number;
  month: number;
  onChangeDate: (year: number, month: number, day: number) => void;
  onClickClose: () => void;
};

const StyledButton = styled.button`
  background-color: #ffffff;
  border: none;
  color: #636363;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function CalenderTable(props: Props) {
  const [dateLists, setDateLists] = useState<Array<Array<number>>>([[]]);

  const createCalender = () => {
    const todayDate = new Date(props.yaer, props.month);
    const year = todayDate.getFullYear();
    const month = todayDate.getMonth() + 1;
    const monthStartDate = new Date(year, month - 2, 1);
    const monthEndDate = new Date(year, month - 1, 0);
    const dateList = [];
    // 先月分のデータを埋める
    for (let i = 0; i < monthStartDate.getDay(); i++) {
      dateList.push(0);
    }
    // 配列に日付を入植する
    for (let i = monthStartDate.getDate(); i <= monthEndDate.getDate(); i++) {
      dateList.push(i);
    }
    const newDateList: Array<Array<number>> = [];
    let tempList: Array<number> = [];

    dateList.forEach((date: number, index: number) => {
      if (index % 7 === 0 && index !== 0) {
        newDateList.push(tempList);
        tempList = [];
      }
      tempList.push(date);
    });
    newDateList.push(tempList);
    setDateLists(newDateList);
  };

  const onClickDay = (e: React.MouseEvent) => {
    const day = e.currentTarget.getAttribute("data-calender-date");
    if (day === null) {
      return;
    }
    console.log(props.yaer, "年", props.month, "月", day, "日");
    props.onChangeDate(props.yaer, props.month, Number(day));
    props.onClickClose();
  };

  useEffect(() => {
    createCalender();
  }, [props]);

  return (
    <>
      <table>
        <thead>
          <tr>
            {weeks.map((week: string, index: number) => {
              return <th key={`week-${index}`}>{week}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dateLists.map((lists: Array<number>, weeklyIndex: number) => {
            return (
              <tr key={`weekly-${weeklyIndex}`}>
                {lists.map((list: number, index: number) => {
                  if (list === 0) {
                    return <td key={`dayly-${index}`}></td>;
                  }
                  return (
                    <td key={`dayly-${index}`}>
                      <StyledButton
                        onClick={onClickDay}
                        data-calender-date={list}
                      >
                        {list}
                      </StyledButton>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
