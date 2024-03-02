import Icon from "./icon";
import company from "@/config/company";

export default function SocialIcons({ className = "", size = 18 }: { className?: string, size?: number }) {
  return (
    <div className={className}>
      <a href={company.instagram}>
        <span className="sr-only">Instagram</span>
        <Icon name="instagram" width={size} height={size} />
      </a>
      <a href={company.facebook}>
        <span className="sr-only">Facebook</span>
        <Icon name="facebook" width={size} height={size} />
      </a>
    </div>
  )
}
