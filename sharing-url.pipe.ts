import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sharingUrl'})
export class sharingUrl implements PipeTransform {
  transform(url: string, provider: string): string {

    let providers: object = {
      facebook: 'https://www.facebook.com/sharer.php?u=',
      twitter: 'https://twitter.com/intent/tweet?url=',
      whatsapp: 'https://wa.me/?text=',
      telegram: 'https://telegram.me/share/url?url=',
      linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url=',
      xing: 'https://www.xing.com/app/user?op=share&url=',
      pinterest: 'http://pinterest.com/pin/create/link/?url=',
      reddit: 'https://reddit.com/submit?url=',
      tumblr: 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=',
      blogger: 'https://www.blogger.com/blog-this.g?u=',
      digg: 'http://digg.com/submit?url=',
      email: 'mailto:%20?body='
    };

    if (provider in providers) {
        return providers[provider] + url;
    }
    return url;
  }
}
