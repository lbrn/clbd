export default interface menuLink {
  code: string;
  clickHandler: () => Promise<void> | void;
  displayName: string;
}
