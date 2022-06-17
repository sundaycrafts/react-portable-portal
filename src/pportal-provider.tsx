import { FC, Fragment, PropsWithChildren, useMemo, useState } from "react";
import ModalContext, { PportalContextValue } from "./pportal-context";
import { PportalContent } from "./pportal-content";
import { not, toBe } from "./util";

const PportalProvider: FC<PropsWithChildren<{}>> = (props) => {
  const [modalContents, setModalContents] = useState<PportalContent[]>([]);

  const contextValue: PportalContextValue = useMemo<PportalContextValue>(
    () => ({
      _setContent: (c) =>
        setModalContents((cc) => [...cc.filter(not(toBe(c))), c]),
      _removeContent: (c) => setModalContents((cc) => cc.filter(not(toBe(c)))),
    }),
    []
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {modalContents.map(({ node, id }) => (
        <Fragment key={id}>{node}</Fragment>
      ))}
      {props.children}
    </ModalContext.Provider>
  );
};
export default PportalProvider;
