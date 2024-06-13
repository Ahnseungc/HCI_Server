import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('kakao')
  @UseGuards(AuthGuard('kakao'))
  async kakaoLogin(@Req() req, @Res() res): Promise<void> {
    try {
      const existingUser = await this.authService.findUserByKakaoId(
        req.user.kakaoId,
      );

      if (existingUser) {
        // 이미 등록된 사용자일 경우
        return res.json({
          kakaoId: req.user.kakaoId,
          username: req.user.username,
          img: req.user.img,
          emails: req.user.emails,
        });
      } else {
        // 새로운 사용자일 경우
        await this.authService.createUser(req.user);
        return res.json({
          kakaoId: req.user.kakaoId,
          username: req.user.username,
          img: req.user.img,
          emails: req.user.emails,
        });
      }
    } catch (error) {
      // 에러 처리
      console.error('Kakao login error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  @Get('kakao/callback')
  @UseGuards(AuthGuard('kakao'))
  async kakaoLoginCallback(@Req() req, @Res() res) {
    try {
      const user = req.user;
      return res.json({
        kakaoId: user.kakaoId,
        username: user.username,
        img: user.img,
        emails: user.emails,
      });
    } catch (error) {
      // 에러 처리
      console.error('Kakao login callback error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
