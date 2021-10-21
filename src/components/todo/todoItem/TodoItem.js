import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../form/button/Button";
import Checkbox from "../../form/checkBox/CheckBox";
import Text from "../../base/text/Text";

import { S } from "./TodoItem.styles";
import colors from "../../../theme/colors";

import { toggleTodoAsync, removeTodoAsync } from "../../../features/todoSlice";

export default function TodoItem({ id, uid, name, isCompleted }) {
  const dispatch = useDispatch();
  const [isDisable, setDisable] = useState(false);

  function _handleToggle() {
    setDisable(true);
    dispatch(
      toggleTodoAsync({
        uid: uid,
        data: {
          id: id,
          name: name,
          completed: !isCompleted,
        },
      })
    ).then(() => {
      setDisable(false);
    });
  }

  function _handleRemove() {
    dispatch(
      removeTodoAsync({
        uid: uid,
        id: id,
      })
    );
  }

  return (
    <S.Container
      className={`${isCompleted ? "completed" : ""} ${
        isDisable ? "disabled" : ""
      }`}
      disabled={isDisable}
    >
      <div>
        <Checkbox onChange={_handleToggle} value={isCompleted} />
        <Text>{name}</Text>
      </div>
      <Button
        backgroundColor="transparent"
        textColor={colors.danger}
        onClick={_handleRemove}
      >
        Delete
      </Button>
    </S.Container>
  );
}
