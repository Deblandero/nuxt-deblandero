export function mailToOD(): void {
    const emailTo = 'olivier@deblandero.be';
    const emailSub = 'Email de contact en provenance du site Deblandero.be';
    const emailBody = '';
    window.location.href = "mailto:" + emailTo + '?subject=' + emailSub + '&body=' + emailBody;
}