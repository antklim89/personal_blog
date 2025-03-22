import {
  BlueskyIcon,
  BlueskyShareButton,
  EmailIcon,
  EmailShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  ThreadsIcon,
  ThreadsShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';


const ICON_SIZE = 42;

export default function Share({ title, text }: { title: string; text: string }) {
  const url = location.href;

  return (
    <section>
      <EmailShareButton subject={title} body={text} url={url} htmlTitle={title}>
        <EmailIcon size={ICON_SIZE} />
      </EmailShareButton>
      <WhatsappShareButton url={url} title={title} htmlTitle={title}>
        <WhatsappIcon size={ICON_SIZE} />
      </WhatsappShareButton>
      <RedditShareButton url={url} title={title} htmlTitle={title}>
        <RedditIcon size={ICON_SIZE} />
      </RedditShareButton>
      <TelegramShareButton url={url} title={title} htmlTitle={title}>
        <TelegramIcon size={ICON_SIZE} />
      </TelegramShareButton>
      <ThreadsShareButton url={url} title={title} htmlTitle={title}>
        <ThreadsIcon size={ICON_SIZE} />
      </ThreadsShareButton>
      <BlueskyShareButton url={url} title={title} htmlTitle={title}>
        <BlueskyIcon size={ICON_SIZE} />
      </BlueskyShareButton>
    </section>
  );
}
