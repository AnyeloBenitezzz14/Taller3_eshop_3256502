import React from "react";
import { Box } from "@mui/material";

import { UseStateColor } from "../hooks/useState";
import { UseEffectCounter } from "../hooks/useEffect";
import { UseContextSimple } from "../hooks/useContext";
import { UseRefExample } from "../hooks/useRef";
import { UseReducerExample } from "../hooks/useReduce";
import { UseCallbackExample } from "../hooks/useCallback";
import { UseMemoExample } from "../hooks/useMemo";
import { UseCustomHookExample } from "../hooks/useCustomHook";
import { useOnlineStatus } from "../hooks/useStateOnline";

export const Offers = () => {
  const isOnline = useOnlineStatus();

  return (
    <Box mt={14}>
      <UseStateColor />
      <UseEffectCounter />
      <UseContextSimple />
      <UseRefExample />
      <UseReducerExample />
      <UseCallbackExample />
      <UseMemoExample />
      <UseCustomHookExample />

      <h1 style={{ color: "white" }}>
        {isOnline ? "✅ En línea" : "❌ Desconectado"}
      </h1>
    </Box>
  );
};