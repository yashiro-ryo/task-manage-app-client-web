import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import ErrorText from "./ErrorText";
import InputForm from "./InputForm";
import { socketIO } from "../socket/socket";
import { TaskGroup } from "../types/task";
import { useParams } from "react-router";

type Props = {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
  taskGroup: TaskGroup;
};

const StyledModal = styled(Modal)`
  color: #636363;
`;

const OptionSpacer = styled.p`
  margin-top: 10px;
  margin-bottom: 5px;
  border-bottom: 2px solid #636363;
  font-weight: bold;
`;

const options = [
  {
    label: "高",
    value: "high",
  },
  {
    label: "中",
    value: "middium",
  },
  {
    label: "低",
    value: "low",
  },
];

export default function TaskEditor(props: Props) {
  const [taskName, setTaskName] = useState("");
  const [, setPriority] = useState("");
  const [deadlineDate, setDeadlineDate] = useState<{
    year: number;
    month: number;
    day: number;
  }>({
    year: 2000,
    month: 9,
    day: 15,
  });
  const [deadlineTime, setDeadlineTime] = useState<{
    hour: number;
    min: number;
  }>({
    hour: 3,
    min: 12,
  });
  const [isTaskValidationErrorVisible, setTaskValidationErrorVisible] =
    useState(false);
  const [taskValidationErrorText, setTaskValidationErrorText] = useState("");
  const [isDeadlineValidationErrorVisible, setDeadlineValidationErrorVisible] =
    useState(false);
  const [deadlineValidationErrorText, setDeadlineValidationErrorText] =
    useState("");
  const [useTaskEditorOption, setTaskEditorOption] = useState(false);
  const handleClose = () => {
    props.setVisible(false);
  };

  // any滅ぼす
  const onChangeTaskName = (e: any) => {
    const name = e.target.value;
    setTaskName(name);
  };

  const onChangeTaskPriority = (e: any) => {
    const priority = e.target.value;
    setPriority(priority);
  };

  const onChangeDate = (year: number, month: number, day: number) => {
    setDeadlineDate({ year: year, month: month, day: day });
  };

  const onChangeTime = (hour: number, min: number) => {
    setDeadlineTime({ hour: hour, min: min });
  };

  const validate = () => {
    let isNotAbleToSubmit = false;
    if (taskName.length > 50 || taskName.length < 1) {
      setTaskValidationErrorVisible(true);
      setTaskValidationErrorText(
        "タスクは1文字以上５０文字以下にしてください。"
      );
      isNotAbleToSubmit = true;
    }

    if (useTaskEditorOption && dateValidate(deadlineDate, deadlineTime)) {
      setDeadlineValidationErrorVisible(true);
      setDeadlineValidationErrorText("過去の日時を指定することはできません。");
      isNotAbleToSubmit = true;
    }
    return isNotAbleToSubmit;
  };

  const dateValidate = (
    date: { year: number; month: number; day: number },
    time: { hour: number; min: number }
  ): boolean => {
    const nowDate = new Date();
    if (date.year < nowDate.getFullYear()) {
      return true;
    }

    if (
      date.year === nowDate.getFullYear() &&
      date.month < nowDate.getMonth() + 1
    ) {
      return true;
    }

    if (
      date.year === nowDate.getFullYear() &&
      date.month === nowDate.getMonth() + 1 &&
      date.day < nowDate.getDate()
    ) {
      return true;
    }

    if (
      date.year === nowDate.getFullYear() &&
      date.month === nowDate.getMonth() + 1 &&
      date.day === nowDate.getDate() &&
      time.hour < nowDate.getHours()
    ) {
      return true;
    }

    if (
      date.year === nowDate.getFullYear() &&
      date.month === nowDate.getMonth() + 1 &&
      date.day === nowDate.getDate() &&
      time.hour === nowDate.getHours() &&
      time.min < nowDate.getMinutes()
    ) {
      return true;
    }
    return false;
  };

  const resetErrorText = () => {
    setTaskValidationErrorVisible(false);
    setTaskValidationErrorText("");
    setDeadlineValidationErrorVisible(false);
    setDeadlineValidationErrorText("");
  };

  const param = useParams();

  const submitTask = () => {
    const isNotAbleToSubmit = validate();
    // dbにデータを飛ばす
    if (isNotAbleToSubmit) {
      return;
    }
    const socket = socketIO.getSocket();
    if (socket === undefined) {
      handleClose();
      return;
    }
    socket.emit("create-task", {
      // path paramから取得できるようにする
      projectId: param.projectId,
      taskGroupId: props.taskGroup.taskGroupId,
      taskText: taskName,
      position: props.taskGroup.tasks.length,
    });
    handleClose();
  };

  useEffect(() => {
    resetErrorText();
    if (props.isVisible === true) {
      setTaskName("");
    }
  }, [props.isVisible]);

  return (
    <StyledModal show={props.isVisible} onHide={handleClose}>
      <StyledModal.Header closeButton>
        <StyledModal.Title>タスク作成</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>
        <InputForm
          formLabel="タスク名"
          formType="text"
          placeHolder="例: ご飯作る"
          onChange={onChangeTaskName}
          value={taskName}
        />
        <ErrorText
          isVisible={isTaskValidationErrorVisible}
          errorText={taskValidationErrorText}
        />
      </StyledModal.Body>
      <StyledModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          キャンセル
        </Button>
        <Button variant="primary" onClick={submitTask}>
          タスク作成
        </Button>
      </StyledModal.Footer>
    </StyledModal>
  );
}
