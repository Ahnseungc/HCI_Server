import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET,
      callbackURL: process.env.NEXT_PUBLIC_KAKAO_CALLBACK_URL,
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ) {
    try {
      const user = {
        kakaoId: profile.id,
        username: profile.username,
        img: profile._json.properties.profile_image,
        emails: profile._json.kakao_account.email,
      };
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
}
