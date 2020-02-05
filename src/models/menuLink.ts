export default interface menuLink {
  name: string;
  clickHandler: () => Promise<void> | void;
  displayName: string;
}
