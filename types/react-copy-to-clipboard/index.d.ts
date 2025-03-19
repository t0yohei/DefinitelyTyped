import * as React from "react";

interface CopyToClipboardOptions {
  debug?: boolean;
  message?: string;
  format?: string; // MIME type
}

interface CopyToClipboardProps {
  children?: React.ReactNode;
  text: string;
  onCopy?(text: string, result: boolean): void;
  options?: CopyToClipboardOptions;
}

declare class CopyToClipboard extends React.PureComponent<CopyToClipboardProps> {}

declare namespace CopyToClipboard {
  interface Props extends CopyToClipboardProps {}
  interface Options extends CopyToClipboardOptions {}
}

export as namespace CopyToClipboard;

export = CopyToClipboard;
