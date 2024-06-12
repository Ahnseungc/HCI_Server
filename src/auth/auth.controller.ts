// import { Controller, Get, Res, UseGuards } from '@nestjs/common';
// import { KakaoAuthGuard } from './auth.guard';

// @Controller('api/auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @UseGuards(KakaoAuthGuard)
//   @Get('login/kakao')
//   async kakaoCallback(
//     @SocialUser() socialUser: SocialUserAfterAuth,
//     @Res({ passthrough: true }) res: Response,
//   ): Promise<void> {
//     const { accessToken, refreshToken } = await this.authService.OAuthLogin({
//       socialLoginDto: socialUser,
//     });
//     res.cookie('refreshToken', refreshToken);
//     res.cookie('accessToken', accessToken);

//     res.redirect('/');
//   }
// }
