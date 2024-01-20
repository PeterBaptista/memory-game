import {
  AlertTriangle,
  ArrowRight,
  Banknote,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Download,
  Calendar,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  MessageCircle,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  Share,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
  PanelRightClose,
  PanelRightOpen,
  ArrowLeft,
  Layout,
  LogOut,
  Loader,
  Users,
  WalletCards,
  Layers,
  Store,
  Wrench,
  Star,
  ArrowUpRight,
  CheckCircle2,
  Eye,
  EyeOff,
  Search,
  Upload,
  Lock,
  Grid,
  List,
  Info,
  Ban,
  Pencil,
  FileEdit,
  Spade,
  Diamond,
  Club,
  Heart,
} from "lucide-react";

export type Icon = LucideProps;

export const Icons = {
  logo: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="fintrack"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.44914 1.78362L1.14556 3.55413L1.06592 3.87513C1.02224 4.05176 1.00725 4.85053 1.03264 5.65025V7.11628L5.17474 5.45218C7.42754 4.54366 9.71109 3.70366 9.97855 3.65315L14.5712 5.36022L18.8994 7.10405L18.9497 6.54035L19 5.97649L18.792 5.77732C18.6777 5.66772 16.7075 4.82035 14.414 3.89435C12.1206 2.9682 10.1878 2.12114 10.1191 2.01202C9.99259 1.81131 10.0052 -0.0146957 9.87084 8.9289e-05C9.80587 0.00723677 7.81596 0.809819 5.44914 1.78362ZM1 8.24637V10.1093V11.7747L1.19713 11.6981C1.30563 11.656 3.25343 10.8622 5.52578 9.93397C7.79814 9.00575 9.80192 8.24637 9.97855 8.24637C10.1553 8.24637 12.2277 9.03259 14.5838 9.99353C16.9401 10.9545 18.8926 11.7407 18.923 11.7407C18.9533 11.7407 18.9782 11.4562 18.9782 11.1085V10.4765L18.3868 10.1808C18.0617 10.018 16.1277 9.21922 14.0894 8.40552C12.0511 7.59182 10.3342 6.83489 10.2257 6.75039L10.068 6.59156L9.98912 4.75205C9.75256 4.8444 1.75587 7.91577 1 8.24637ZM5.57341 11.0166C4.02758 11.6423 2.53002 12.217 1 12.8655V14.7391V16.3079L1.20233 16.4771C1.31367 16.5702 3.29428 17.4009 5.60353 18.3232C7.91279 19.2454 9.91468 20 10.052 20C10.1894 20 12.0943 19.2799 14.2851 18.3998C16.4761 17.5197 18.4321 16.6934 18.6321 16.5638L18.9954 16.3281L18.9475 15.6624L18.8994 14.9968L14.7991 13.3281C12.5439 12.4102 10.5581 11.5761 10.3862 11.4745L9.98912 11.2771C9.9685 11.047 10.0157 9.37983 9.97855 9.37113C9.89181 9.35096 7.78521 10.1214 5.57341 11.0166Z"
        fill="currentColor"
      />
    </svg>
  ),
  close: X,
  users: Users,
  spinner: Loader2,
  calendar: Calendar,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  download: Download,
  trash: Trash,
  post: FileText,
  page: File,
  ban: Ban,
  media: Image,
  spade: Spade,
  diamond: Diamond,
  club: Club,
  heart: Heart,
  fileEdit: FileEdit,
  messageCircle: MessageCircle,
  store: Store,
  wrench: Wrench,
  star: Star,
  arrowUpRight: ArrowUpRight,
  checkCircle2: CheckCircle2,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  eye: Eye,
  eyeOff: EyeOff,
  contract: Layers,
  invoices: WalletCards,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  help: HelpCircle,
  search: Search,
  upload: Upload,
  lock: Lock,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  info: Info,
  layout: Layout,
  grid: Grid,
  list: List,
  panelRightOpen: PanelRightOpen,
  panelRightClose: PanelRightClose,
  logout: LogOut,
  loader: Loader,
  bankNote: Banknote,
  pencil: Pencil,
  share: Share,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  twitter: Twitter,
  check: Check,
};
