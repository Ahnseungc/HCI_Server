import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('kakao')
  @UseGuards(AuthGuard('kakao'))
  async kakaoLogin(@Req() req, @Res() res): Promise<void> {
    console.log(await this.authService.findUserByKakaoId(req.user.kakaoId));
    if ((await this.authService.findUserByKakaoId(req.user.kakaoId)) !== null) {
      return res.send(`
          <div>회원가입을 축하합니다.</div>
              `);
    } else {
      this.authService.createUser(req.user);
      return res.send(`
        <div>회원가입 실패</div>
            `);
    }
  }

  @Get('kakao/callback')
  @UseGuards(AuthGuard('kakao'))
  async kakaoLoginCallback(): Promise<void> {}
}
