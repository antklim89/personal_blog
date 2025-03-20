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


export default function Share({ title, text }: { title: string; text: string }) {
  const url = location.href;
  return (
    <section>
      <div>
        <EmailShareButton subject={title} body={text} url={url} htmlTitle={title}>
          <EmailIcon />
        </EmailShareButton>
        <WhatsappShareButton url={url} title={title} htmlTitle={title}>
          <WhatsappIcon />
        </WhatsappShareButton>
        <RedditShareButton url={url} title={title} htmlTitle={title}>
          <RedditIcon />
        </RedditShareButton>
        <TelegramShareButton url={url} title={title} htmlTitle={title}>
          <TelegramIcon />
        </TelegramShareButton>
        <ThreadsShareButton url={url} title={title} htmlTitle={title}>
          <BlueskyIcon />
        </ThreadsShareButton>
        <BlueskyShareButton url={url} title={title} htmlTitle={title}>
          <ThreadsIcon />
        </BlueskyShareButton>
      </div>
    </section>
  );
}
