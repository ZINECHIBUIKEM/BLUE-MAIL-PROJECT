const newStoredUser = localStorage.getItem("user");
const profileUserInfo = JSON.parse(newStoredUser);
const threeHoursAgo = dayjs().subtract(3, "hours");
const threeDaysAgo = dayjs().subtract(3, "days");
// MAIL ARRAY SECTION

export const mails = [
  {
    id: crypto.randomUUID(),
    sender: "BlueMail",
    subject: "Security Alert!",
    body: `Dear ${profileUserInfo.Username}, We noticed a new sign in, click to verify if this was you trying to log in or report this activity so as to not be locked out of your account. If this action was done by you then please ignore this message.`,
    time: "Just now",
    read: false,
    checked: false,
    starred: false
  },{
    id: crypto.randomUUID(),
    sender: "ZineXpression",
    subject: "New collaboration",
    body: "Lets talk about your next project and how we can work together to make it a success by the year 2027. hopefully we can become the developers we always wanted to become, make our dreams come true one step at aa time.",
    time: threeHoursAgo.format("hh:mm A"),
    read: false,
    checked: false,
    starred: false
  }, {
    id: crypto.randomUUID(),
    sender: "Amazon",
    subject: "Order Confirmation",
    body: "Your order has been confirmed and would be shipped soon, please check your order details and make sure to be available for delivery.",
    time: threeHoursAgo.subtract(1.30, "hours").format("hh:mm A"),
    read: false,
    checked: false,
    starred: false
  }, {
    id: crypto.randomUUID(),
    sender: "LinkedIn",
    subject: "New connection request",
    body: "You have a new connection request from John Doe, a software engineer at Google. Click to view their profile and accept or decline the request.",
    time: threeDaysAgo.format("MMMM, D"),
    read: false,
    checked: false,
    starred: false
  }, {
    id: crypto.randomUUID(),
    sender: "X",
    subject: "New follower",
    body: "You have a new follower, Jane Smith. Click to view their profile information and see their tweets. More info about your new followers and how you react with them can be found in the followers tab",
    time: threeDaysAgo.subtract(2, "days").format("MMMM, D"),
    read: false,
    checked: false,
    starred: false
  }, {
    id: crypto.randomUUID(),
    sender: "Udemy",
    subject: "Course Recommendation",
    body: "You have a new course recommendation based on your interests. Click to view the course details and enroll Now to get a discount of half the initial price slash, include reminders for the lessons and Recieve your cerfificate all for just $20.",
    time: threeDaysAgo.subtract(2, "days").format("MMMM, D"),
    read: false,
    checked: false,
    starred: false
  },   {
    id: crypto.randomUUID(),
    sender: "X",
    subject: "Your weekly activity summary",
    body: "Here’s a detailed breakdown of everything that happened on your account this week. You gained new followers, received engagement on multiple tweets, and interacted with several trending topics. We’ve noticed increased visibility on your recent posts, which means more people are discovering your profile. To keep this momentum going, consider posting consistently, engaging with replies, and exploring new topics that align with your interests and audience. You can view your complete analytics dashboard to learn more about impressions, clicks, and profile visits.",
    time: threeDaysAgo.subtract(2, "days").format("MMMM, D"),
    read: false,
    checked: false,
    starred: false
  },
  {
    id: crypto.randomUUID(),
    sender: "Security Team",
    subject: "New login detected on your account",
    body: "We detected a new login to your account from a device or location that we do not usually recognize. This could simply be you signing in from a new browser, phone, or network. However, if this activity was not initiated by you, we strongly recommend that you secure your account immediately by changing your password and reviewing your recent login history. For your safety, enabling two-factor authentication adds an extra layer of protection and helps prevent unauthorized access.",
    time: threeDaysAgo.subtract(2, "days").format("MMMM, D"),
    read: false,
    checked: false,
    starred: false
  },
  {
    id: crypto.randomUUID(),
    sender: "Community Updates",
    subject: "Important changes to our community guidelines",
    body: "We’re writing to inform you about recent updates to our community guidelines and policies. These changes are designed to create a safer, more respectful environment for everyone using the platform. Please take a few moments to review the updated rules, as continued use of the service implies acceptance of these policies. Violations may result in content removal or account restrictions, so understanding the guidelines will help you avoid unintended issues and maintain a positive presence in the community.",
    time: dayjs().subtract(6, "days").format("MMMM, D"),
    read: false,
    checked: false,
    starred: false
  },
  {
    id: crypto.randomUUID(),
    sender: "Monetization Team",
    subject: "You’re now eligible for monetization",
    body: "Congratulations! Based on your recent activity and engagement levels, your account is now eligible for monetization features. This means you can start earning from your content through supported programs such as subscriptions, ad revenue sharing, or creator incentives. To get started, visit the monetization section in your dashboard and complete the required setup steps. Make sure your payout information is accurate to avoid delays, and review the eligibility terms to maximize your earnings potential.",
    time: dayjs().subtract(8, "days").format("MMMM, D"),
    read: false,
    checked: false,
    starred: false
  },
  {
    id: crypto.randomUUID(),
    sender: "Support",
    subject: "We’ve received your support request",
    body: "Thank you for reaching out to our support team. This message confirms that we have received your request and it is currently being reviewed by one of our specialists. We aim to respond as quickly as possible, but response times may vary depending on the complexity of the issue. In the meantime, you can explore our help center for articles and troubleshooting steps that may provide immediate assistance.",
    time: dayjs().subtract(10, "days").format("MMMM, D"),
    read: false,
    checked: false,
    starred: false
  },
  {
    id: crypto.randomUUID(),
    sender: "X",
    subject: "Your post is gaining attention",
    body: "One of your recent posts is gaining more attention than usual and is being shared across the platform. Increased engagement like this can help expand your reach and attract new followers. We encourage you to stay active by responding to comments, joining the conversation, and sharing related content while the topic is still trending. Staying engaged helps strengthen your connection with your audience and keeps your profile visible.",
    time: dayjs().subtract(12, "days").format("MMMM, D"),
    read: false,
    checked: false,
    starred: false
  },
  {
    id: crypto.randomUUID(),
    sender: "Notifications",
    subject: "You were mentioned in a conversation",
    body: "You were mentioned in a public conversation by another user. Mentions are a great way to connect, respond to questions, and build relationships within the community. Clicking on this message will take you directly to the conversation where you were mentioned, allowing you to reply or view the full context. Engaging in conversations can help boost your visibility and strengthen your network.",
    time: dayjs().subtract(14, "days").format("MMMM, D"),
    read: false,
    checked: false,
    starred: false
  },
  {
    id: crypto.randomUUID(),
    sender: "Product Team",
    subject: "New features are now available",
    body: "We’ve rolled out several new features designed to improve your experience and give you more control over your content. These updates include performance improvements, new customization options, and enhanced tools for managing your account. We recommend exploring the updated interface to familiarize yourself with the changes. Your feedback is important to us, and it helps shape future improvements.",
    time: dayjs().subtract(16, "days").format("MMMM, D"),
    read: false,
    checked: false,
    starred: false
  },
  {
    id: crypto.randomUUID(),
    sender: "Analytics",
    subject: "Your monthly performance report",
    body: "Your monthly performance report is ready. This report provides an in-depth overview of how your content performed over the past month, including impressions, engagement rates, and follower growth. Reviewing these insights can help you understand what resonates most with your audience and guide your content strategy going forward. Consistently analyzing your performance is one of the most effective ways to improve your reach and impact.",
    time: dayjs().subtract(18, "days").format("MMMM, D"),
    read: false,
    checked: false,
    starred: false
  },
  {
    id: crypto.randomUUID(),
    sender: "Trust & Safety",
    subject: "Account safety reminder",
    body: "This is a friendly reminder to keep your account secure by using a strong, unique password and enabling two-factor authentication. Regularly reviewing your account settings and connected applications can help prevent unauthorized access. Staying proactive about security ensures that your account remains safe and that your experience on the platform is uninterrupted.",
    time: dayjs().subtract(20, "days").format("MMMM, D"),
    read: false,
    checked: false,
    starred: false
  }
];
