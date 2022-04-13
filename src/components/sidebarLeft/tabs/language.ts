/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

import { SettingSection } from "..";
import { randomLong } from "../../../helpers/random";
import I18n from "../../../lib/langPack";
import apiManager from "../../../lib/mtproto/mtprotoworker";
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

    const promise = apiManager.invokeApiCacheable('langpack.getLanguages', {
      lang_pack: 'macos'
    }).then((languages) => {
      // Push Unofficial TW/CN Languages
      languages.unshift({
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
      languages.unshift({
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
      const random = randomLong();
      languages.forEach((language) => {
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
        I18n.getLangPack(value);
      });
  
      I18n.getCacheLangPack().then(langPack => {
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
