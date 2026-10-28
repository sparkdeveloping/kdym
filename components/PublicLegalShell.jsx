import { PublicHeader, PublicFooter } from "./PublicSiteChrome";
export default function PublicLegalShell({ children }) {
  return <div className="retreat-root hy-legal-shell"><PublicHeader />{children}<PublicFooter /></div>;
}
