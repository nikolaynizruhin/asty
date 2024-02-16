import Icon from "./icon";

export default function SocialIcons({ className = "", size = 18 }: { className?: string, size?: number }) {
  return (
    <div className={className}>
      <a href="https://www.instagram.com/asty_ua">
        <span className="sr-only">Instagram</span>
        <Icon name="instagram" width={size} height={size} />
      </a>
      <a href="https://www.facebook.com/asty.ukraine">
        <span className="sr-only">Facebook</span>
        <Icon name="facebook" width={size} height={size} />
      </a>
    </div>
  )
}
