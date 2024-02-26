import { createContext, useContext, useReducer } from "react";

interface AuthenticationState {
  isAuth: boolean;
}

type Action = { type: "LOGIN" };
type Dispatch = (action: Action) => void;

const AuthenticationDispatchCtxt = createContext<Dispatch | undefined>(
  undefined
);
const AuthenticationStateCtxt = createContext<AuthenticationState | undefined>(
  undefined
);

const authenticationReducer = (
  state: AuthenticationState,
  action: Action
): AuthenticationState => {
  switch (action.type) {
    case "LOGIN":
      return { isAuth: true };
    default:
      return state;
  }
};

const AuthenticationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(authenticationReducer, {
    isAuth: false,
  });

  return (
    <AuthenticationStateCtxt.Provider value={state}>
      <AuthenticationDispatchCtxt.Provider value={dispatch}>
        {children}
      </AuthenticationDispatchCtxt.Provider>
    </AuthenticationStateCtxt.Provider>
  );
};
const useAuthenticationState = () => {
  const context = useContext(AuthenticationStateCtxt);
  if (context === undefined) {
    throw new Error("State Error");
  }
  return context;
};

const useAuthenticationDispatch = () => {
  const context = useContext(AuthenticationDispatchCtxt);
  if (context === undefined) {
    throw new Error("Dispatch Error");
  }
  return context;
};

export {
  AuthenticationProvider,
  useAuthenticationDispatch,
  useAuthenticationState,
};
