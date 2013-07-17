<?php
/*
 +-----------------------------------------------------------------------+
 | ./plugins/calendar/localization/pl_PL.inc
 |
 | Language file of MyRoundcube Plugins Bundle
 | Copyright (C) 2010-2013, Roland 'rosali' Liebl
 |
 +-----------------------------------------------------------------------+
 | Author: tomasz.chilinski@chilan.com - 06/22/2013 12:34:49
 +-----------------------------------------------------------------------+
*/

$labels = array();
$labels['pluginname'] = 'Kalendarz';
$labels['plugindescription'] = 'Zarządzaj swoimi zdarzeniami przez Kalendarz-WWW. Możesz połączyć swój kalendarz z kalendarzem Google lub innymi kalendarzami typu CAL-DAV.';
$labels['calendarprovider'] = 'Dostawca';
$labels['forinstance'] = 'np.';
$labels['caldavserver'] = 'Serwer CalDAV';
$labels['caldavsettings'] = 'Ustawienia CalDAV';
$labels['unlink_caldav'] = 'Aby usunąć tę kategorię, proszę najpierw odłączyć serwer CalDAV';
$labels['caldavurl'] = 'URL CalDAV';
$labels['passwordisset'] = 'Hasło jest ustawione';
$labels['passwordisnotset'] = 'Hasło nie jest ustawione';
$labels['default_view'] = 'Domyślny widok';
$labels['timeslots'] = 'Przedzialy czasowe na godzinę';
$labels['duration'] = 'Czas trwania (domyślny)';
$labels['workdays'] = 'Dni robocze';
$labels['first_day'] = 'Pierwszy dzień tygodnia';
$labels['categories'] = 'Kategorie';
$labels['add_category'] = 'Dodaj kategorię';
$labels['add_caldav'] = 'Dowiąż zasób CalDAV';
$labels['remove_category'] = 'Usuń kategorię';
$labels['calendar_feeds'] = 'Kalendarz RSS';
$labels['feeds'] = 'Dostawcy kalendarzy';
$labels['add_feed'] = 'Dodaj RSS';
$labels['remove_feed'] = 'Usuń RSS';
$labels['sharing'] = 'Udostępnianie';
$labels['share'] = 'Udostępnij';
$labels['resource'] = 'Zasób';
$labels['caltoken'] = 'Token';
$labels['confidentialcaldavaccess'] = 'Pufny dostęp CalDAV do [%s]';
$labels['readwrite'] = 'odczyt/zapis';
$labels['calconfidentialurl'] = 'Poufny dostęp do RSS [%s]';
$labels['readonly'] = 'tylko do odczytu';
$labels['calicsurl'] = 'ICS URL';
$labels['calfeedurl'] = 'RSS URL';
$labels['icsaccesshint'] = 'Skopjuj powyższe URL i przekaż je innych, aby otrzymali dostęp do twoich wydarzeń w trybie odczytu.<br /> Zmien lub usuń token, aby zlikwidować dostęp.';
$labels['isenabled'] = 'jest włączone';
$labels['isdisabled'] = 'jest wyłączone';
$labels['sharehint'] = 'Podaj poniższe informacje ( Nazwa uzytkownika, Hasło (Token), i URL-e ) dla inych, aby połączyć swoje kalendarze. <br/> Ta informacja pozwala na dostęp w trybie zapisu i odczytu do twojego kalendarza. Zmien lub usuń Token, aby zlikwidować dostęp.';
$labels['sharehint_readonly'] = 'Podaj poniższe informacje ( Nazwa uzytkownika, Hasło (Token), i URL-e ) dla inych aby połączyć swoje kalendarze. <br/> Ta informacja pozwala na dostęp w trybie tylko do odczytu do twojego kalendarza. Zmien lub usuń Token, aby zlikwidować dostęp.';
$labels['calendar_modified'] = 'Kalendarz został zmodyfikowany';
$labels['notify_header'] = 'Droga/i, ';
$labels['event_modified'] = 'Zdarzenie zostało dodane lub zmodyfikowane:';
$labels['event_deleted'] = 'Zdarzenie zostało usunięte';
$labels['regards'] = 'Pozdrowienia,';
$labels['administrator'] = 'Administrator';
$labels['notify_footer'] = 'Otrzymałeś tego e-maila, bo zaznaczyłeś aby być informowanym o zmianach dokonanych przez uczestników w twoim kalendarzu. Nie odpowiadaj na tą wiadomość. W przypadku nieautoryzowanego dostępu lub nadyżuciu kaledarza, zamknij dostęp do kalendarza i poinformuj osoby, które miały do niego dostęp.';
$labels['notify_details'] = 'Szczegóły wydarzenia:';
$labels['minutes'] = 'minut';
$labels['replicateautomatically'] = 'Replikuj bazę CalDAV co';
$labels['caldavreplicationrange'] = 'Replikacja bazy CalDAV dla lat';
$labels['caldavauthentication'] = 'Metoda autentykacji';
$labels['basic'] = 'BASIC';
$labels['detect'] = 'wykryj automatycznie';
$labels['cal_notify'] = 'Wyślij email gdy zdarzenie się zmieni przez właściciela';
$labels['caldav_notify'] = 'Wyślij email gdy zdarzenie się zmieni przez ';
$labels['cal_notify_to'] = 'Odbiorca';
$labels['showbirthdays'] = 'Pokaż urodziny';
$labels['googleuser'] = 'Konto Google';
$labels['googlepass'] = 'Hasło Google';
$labels['googlepassisset'] = 'Hasło Google jest już wprowadzone';
$labels['googlepassisnotset'] = 'Nie wprowadzono jeszcze hasła Google';
$labels['googlecaptcha'] = 'Pozwól na dostęp do twojego konta google';
$labels['clickhere'] = 'Klinij tutaj';
$labels['titleFormatMonth'] = 'MMMM yyyy';
$labels['titleFormatDay'] = 'dddd';
$labels['columnFormatMonth'] = 'ddd';
$labels['columnFormatWeek'] = 'ddd';
$labels['columnFormatDay'] = 'dddd';
$labels['timeOnlyTitle'] = 'Wybierz czas';
$labels['timeText'] = 'Czas';
$labels['hourText'] = 'Godzina';
$labels['minuteText'] = 'Minuta';
$labels['currentText'] = 'Teraz';
$labels['closeText'] = 'Wykonano';
$labels['calendar'] = 'Kalendarz';
$labels['prevrange'] = 'Poprzedni zakres czasowy';
$labels['nextrange'] = 'Następny zakres czasowy';
$labels['yes'] = 'tak';
$labels['no'] = 'nie';
$labels['day'] = 'Dzień';
$labels['workday'] = 'Dzień roboczy';
$labels['week'] = 'Tydzień';
$labels['calendar_week'] = 'Tydzień kalendarza';
$labels['month'] = 'Miesiąc';
$labels['year'] = 'Rok';
$labels['new_event'] = 'Nowe zdarzenie';
$labels['new_event_short'] = 'Stwórz zdarzenie';
$labels['edit_event'] = 'Edycja zdarzenia';
$labels['save'] = 'Zapisz';
$labels['remove'] = 'Usuń';
$labels['cancel'] = 'Anuluj';
$labels['summary'] = 'Temat';
$labels['description'] = 'Opis';
$labels['all-day'] = 'cały dzień';
$labels['export'] = 'Eksport do ICS';
$labels['export_short'] = 'Eksport';
$labels['import'] = 'Import do ICS';
$labels['import_short'] = 'Import';
$labels['category'] = 'Kategoria';
$labels['preview'] = 'Podgląd';
$labels['location'] = 'Lokalizacja';
$labels['default'] = 'Brak';
$labels['date'] = 'Data';
$labels['start'] = 'Start';
$labels['end'] = 'Koniec';
$labels['recur'] = 'Ponowne wystąpienie';
$labels['recurs'] = 'Powtarza się';
$labels['expires'] = 'Wygasa';
$labels['infinite'] = 'nieskończenie';
$labels['reset'] = 'przywróć';
$labels['never'] = 'nigdy';
$labels['occurrences'] = 'Wystąpienia';
$labels['toggle_view'] = 'Przełącz widok';
$labels['generated'] = 'wygenerowany przez';
$labels['selectdate'] = 'Wybierz datę';
$labels['prev_year'] = 'Poprzedni rok';
$labels['prev_month'] = 'Poprzedni miesiąc';
$labels['next_year'] = 'Następny rok';
$labels['next_month'] = 'Następny miesięc';
$labels['choose_date'] = 'Wybierz datę';
$labels['click_here'] = 'Kliknij tutaj';
$labels['removed'] = 'Następujące zdarzenie zostało usunięte!';
$labels['edited_by'] = 'Zmodyfikowane przez';
$labels['addicalmsg'] = 'Zaimportuj do kalendarza';
$labels['icalsavefailed'] = 'Nie można zaimportować pliku kalendarza';
$labels['importedsuccessfully'] = 'Zaimportowano';
$labels['switch_calendar'] = 'Przełącz kalendarz';
$labels['user'] = 'Użytkownicy';
$labels['cal_user'] = 'Kalendarz użytkownika';
$labels['submit'] = 'Zatwierdź';
$labels['filter'] = 'Flitry';
$labels['allevents'] = 'wszystkie zdarzenia';
$labels['defaultcategorylabel'] = 'Domyślna etykieta kalendarza';
$labels['defaultcategory'] = 'Brak';
$labels['backgroundcolor'] = 'Kolor tła';
$labels['general'] = 'Ogólne';
$labels['schedule'] = 'Harmonogram';
$labels['every'] = 'Każdy';
$labels['bydays'] = 'Według dni';
$labels['byweekdays'] = 'Według dni tygodnia';
$labels['bymonthdays'] = 'Według dni miesiąca';
$labels['advanced'] = 'Zaawansowane';
$labels['first'] = 'pierwszy';
$labels['second'] = 'drugi';
$labels['third'] = 'trzeci';
$labels['fourth'] = 'czwarty';
$labels['fifth'] = 'piąty';
$labels['last'] = 'ostatni';
$labels['sunday'] = 'Niedziela';
$labels['monday'] = 'Poniedziałek';
$labels['tuesday'] = 'Wtorek';
$labels['wednesday'] = 'Środa';
$labels['thursday'] = 'Czwartek';
$labels['friday'] = 'Piątek';
$labels['saturday'] = 'Sobota';
$labels['january'] = 'Styczeń';
$labels['february'] = 'Luty';
$labels['march'] = 'Marzec';
$labels['april'] = 'Kwiecień';
$labels['may'] = 'Maj';
$labels['june'] = 'Czerwiec';
$labels['july'] = 'Lipiec';
$labels['august'] = 'Sierpień';
$labels['september'] = 'Wrzesień';
$labels['october'] = 'Październik';
$labels['november'] = 'Listopad';
$labels['december'] = 'Grudzień';
$labels['15_min'] = '15 minut';
$labels['30_min'] = '30 minut';
$labels['45_min'] = '45 minut';
$labels['90_min'] = '1,5 godziny';
$labels['60_min'] = '1 godzina';
$labels['120_min'] = '2 godziny';
$labels['in'] = 'w';
$labels['export_as_file'] = 'Jako plik';
$labels['send_invitation'] = 'Jako zaproszenie';
$labels['invitation_subject'] = 'Zaproszenie';
$labels['custommail'] = 'Zaplanuj własny email';
$labels['reminder_before'] = 'Przypomnij przez rozpoczęciem zdarzenia';
$labels['removereminders'] = 'Usuń przypomnienia';
$labels['remindersloading'] = 'Ładowanie przypomnień';
$labels['reminderfooter'] = 'Otrzymałeś tego e-maila, bo zaznaczyłeś przypominanie o nadchodzącym zdarzeniu w twoim kalendarzu.';
$labels['show_upcoming_cal'] = 'Włącz podgląd nadchodzących zdarzeń';
$labels['invalidresponse'] = 'Niewłaściwa odpowiedź z';
$labels['verifyexpiredate'] = 'Data wygaśnięcia jest niewłaściwa. Czy chcesz ją sprawdzić?';
$labels['importconfirmation'] = 'Czy chcesz zaimportować dołączone zdarzenie(a) do Twojego kalendarza [%s element(ów)] ?';
$labels['item'] = 'Element';
$labels['errorsaving'] = 'Wystąpił błąd podczas zapisu';
$labels['calreadonly'] = 'Ten kalendarz jest tylko do odczytu';
$labels['allcalendars'] = 'wszystkie Kalendarze';
$labels['subscriptions'] = 'Subskrypcje';
$labels['caldav'] = 'CalDAV';
$labels['protected'] = 'chroniony';
$labels['calsearch'] = 'Wyniki wyszukiwania';
$labels['calsearchnomatches'] = 'Brak dopasowań';
$labels['properties'] = 'Właściwości';
$labels['reload'] = 'Przeładuj kalendarz';
$labels['sync'] = 'Synchronizuj';
$labels['unloadwarning'] = 'Zmiany w bazie danych są niekompletne. Prosimy o pozostanie na tej stronie.';
$labels['backgroundreplication'] = 'Synchronizacja w toku...';
$labels['lastreplication'] = 'Ostatnia synchronizacja:';
$labels['successfullyreplicated'] = 'Kalendarz został pomyślnie zreplikowany';
$labels['replicationtimeout'] = 'Wystąpiło przeterminowanie podczas synchronizacji';
$labels['resumereplication'] = 'Wznów synchronizację';
$labels['replicationfailed'] = 'Wystąpił ostateczny błąd synchronizacji';
$labels['replicationincomplete'] = 'Synchronizacja jest niekompletna';
$labels['reminders'] = 'Przypomnienia';
$labels['reminder'] = 'Przypomnienie';
$labels['externalreminders'] = 'Zewnętrzna usługa przypomnień (np. Google Calendar)';
$labels['remindertype'] = 'Przypomnij przez';
$labels['email'] = 'Email';
$labels['popup'] = 'Wyskakujące okno';
$labels['minutesbefore'] = 'Minut przed rozpoczęcziem zdarzenia';
$labels['hoursbefore'] = 'Godzin przed rozpoczęcziem zdarzenia';
$labels['daysbefore'] = 'Dni przed rozpoczęcziem zdarzenia';
$labels['weeksbefore'] = 'Tygodni przed rozpoczęcziem zdarzenia';
$labels['mailto'] = 'Mail do';
$labels['other'] = 'inny';
$labels['reminderenable'] = 'Włącz przypomnienie';
$labels['reminderdisable'] = 'Wyłącz przypomnienie';
$labels['customreminder'] = 'Zdefiniowany przez użytkownika';
$labels['starts'] = 'zaczyna się';
$labels['ends'] = 'kończy się';
$labels['at'] = 'o';
$labels['started'] = 'rozpoczęty';
$labels['terminated'] = 'zakończony';
$labels['noticed'] = 'Przypomnienie zostało zauważone. Usuń z listy';
$labels['minimize'] = 'ukryj';
$labels['maximize'] = 'pokaż';
$labels['rrule'] = 'Reguła';
$labels['editall'] = 'wszystkie zdarzenia';
$labels['editsingle'] = 'tylko to zdarzenie';
$labels['editfuture'] = 'tylko to i następne zdarzenia';
$labels['applyrecurring'] = 'Zastosuj zmiany do...';
$labels['birthday'] = 'Urodziny';
$labels['happybirthday'] = 'Życzenia z okazji urodzin';
$labels['submenuprefix'] = '» ';
$labels['undefined'] = '---';

?>