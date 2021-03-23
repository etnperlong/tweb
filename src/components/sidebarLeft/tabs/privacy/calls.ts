import { SliderSuperTabEventable } from "../../../sliderTab";
import PrivacySection from "../../../privacySection";
import { LangPackKey } from "../../../../lib/langPack";

export default class AppPrivacyCallsTab extends SliderSuperTabEventable {
  protected init() {
    this.container.classList.add('privacy-tab', 'privacy-calls');
    this.setTitle('PrivacySettings.VoiceCalls');

    const caption: LangPackKey = 'PrivacySettingsController.PhoneCallDescription';
    new PrivacySection({
      tab: this,
      title: 'WhoCanCallMe',
      inputKey: 'inputPrivacyKeyPhoneCall',
      captions: [caption, caption, caption],
      exceptionTexts: ['PrivacySettingsController.NeverAllow', 'PrivacySettingsController.AlwaysAllow'],
      appendTo: this.scrollable
    });

    {
      const caption: LangPackKey = 'PrivacySettingsController.P2p.Desc';
      new PrivacySection({
        tab: this,
        title: 'PrivacyP2PHeader',
        inputKey: 'inputPrivacyKeyPhoneP2P',
        captions: [caption, caption, caption],
        exceptionTexts: ['PrivacySettingsController.NeverAllow', 'PrivacySettingsController.AlwaysAllow'],
        appendTo: this.scrollable
      });
    }
  }
}
