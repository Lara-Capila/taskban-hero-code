"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Task } from "../@types/card";
import { BoardStatus } from "../components/ContainerCard";

type BoardDataByStatus = { [key in BoardStatus]: Task[] };

interface BoardContextProps {
  boardData: BoardDataByStatus;
  setBoardData: Dispatch<SetStateAction<BoardDataByStatus>>;
}

const defaultValues: BoardContextProps = {
  boardData: {
    toDo: [],
    doing: [],
    QA: [],
    done: []
  },
  setBoardData: (state) => state
};

const BoardContext = createContext<BoardContextProps>(defaultValues);

export const useBoard = () => {
  const context = useContext(BoardContext);

  if (!context) {
    throw new Error("useTask deve ser usado dentro de um BoardContext");
  }

  return context;
};

export const BoardProvider = ({ children }: { children: ReactNode; }) => {
  const [boardData, setBoardData] = useState<BoardDataByStatus>(defaultValues.boardData);

  return (
    <BoardContext.Provider value={{ boardData, setBoardData }}>
      {children}
    </BoardContext.Provider>
  );
};
