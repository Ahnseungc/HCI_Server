import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as openai from 'openai';

@Injectable()
export class GptService {
  private readonly openAiApi: openai.OpenAI;
  constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {
    this.openAiApi = new openai.OpenAI({
      apiKey: this.configService.get<string>('CHAT_GPT_API_KEY'), // API 키 설정
    });
  }
}
