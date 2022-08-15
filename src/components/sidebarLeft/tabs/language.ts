/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

import { SettingSection } from "..";
import { randomLong } from "../../../helpers/random";
import I18n from "../../../lib/langPack";
import RadioField from "../../radioField";
import Row, { RadioFormFromRows } from "../../row";
import { SliderSuperTab } from "../../slider"

export default class AppLanguageTab extends SliderSuperTab {
  protected async init() {
    this.header.classList.add('with-border');
    this.container.classList.add('language-container');
    this.setTitle('Telegram.LanguageViewController');

    const section = new SettingSection({});

    const radioRows: Map<string, Row> = new Map();

    const promise = Promise.all([
      this.managers.apiManager.invokeApiCacheable('langpack.getLanguages', {
        lang_pack: 'web'
      }),
      this.managers.apiManager.invokeApiCacheable('langpack.getLanguages', {
        lang_pack: 'macos'
      }),
    ]).then(([languages1, languages2]) => {
      const rendered: Set<string> = new Set();
      const webLangCodes = languages1.map((language) => language.lang_code);

      const random = randomLong();

      languages1.unshift({
        _: 'langPackLanguage',
        name: 'Chinese (Traditional)',
        native_name: '繁體中文 (Beta)',
        lang_code: 'zh-hant-raw',
        pFlags: {
          beta: true,
          official: true,
        },
        plural_code: '',
        strings_count: 3852,
        translated_count: 3852,
        translations_url: 'https://translations.telegram.org/zh-hant/macos/',
      });
      languages1.unshift({
        _: 'langPackLanguage',
        name: 'Chinese (Simplified)',
        native_name: '简体中文 (Beta)',
        lang_code: 'zh-hans-raw',
        pFlags: {
          beta: true,
          official: true,
        },
        plural_code: '',
        strings_count: 3852,
        translated_count: 3852,
        translations_url: 'https://translations.telegram.org/zh-hans/macos/',
      });

      languages1.concat(languages2).forEach((language) => {
        if(rendered.has(language.lang_code)) return;
        rendered.add(language.lang_code);

        const row = new Row({
          radioField: new RadioField({
            text: language.name, 
            name: random, 
            value: language.lang_code
          }),
          subtitle: language.native_name
        });
        
        radioRows.set(language.lang_code, row);
      });

      const form = RadioFormFromRows([...radioRows.values()], (value) => {
        I18n.getLangPack(value, webLangCodes.includes(value));
      });
  
      I18n.getCacheLangPack().then((langPack) => {
        const row = radioRows.get(langPack.lang_code);
        if(!row) {
          console.error('no row', row, langPack);
          return;
        }
  
        row.radioField.setValueSilently(true);
      });
  
      section.content.append(form);
    });

    this.scrollable.append(section.container);

    return promise;
  }
}
