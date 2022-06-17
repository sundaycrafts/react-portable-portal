import { FC, PropsWithChildren, useContext, useEffect, useId } from "react";
import ModalContext from "./pportal-context";

const Pportal: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { _setContent, _removeContent } = useContext(ModalContext);
  const id = useId();
  useEffect(() => {
    const c = { id, node: children || null };
    _setContent(c);
    return () => _removeContent(c);
  }, [_setContent, _removeContent, children, id]);

  return null;
};

export default Pportal;
