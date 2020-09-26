# Tugas Arkademy Week 7-8  
# Android Back-End
# ExpessJS - Hiring Apps RESTfull API

[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.13-green.svg?style=rounded-square)](https://nodejs.org/)

> [My Server Cloud](http://34.234.66.114:8080/)  
[My ERD / Flowchart ][erd/flowchart]

## Table Postman Request :
* Registrasi User:
    | HTTP  Verb | Path | Action | info |
    | ---------- | ---- |------- | ---- |
    | POST | /users/login | login | login user dengan token |
    | POST | /users/register | create | mendaftarkan user |
    
* Profile Job Seeker:
    | HTTP  Verb | Path | Action | info |
    | ---------- | ---- |------- | ---- |
    | GET | /profile-job-seeker | index | menampilkan semua data profile job seeker |
    | GET | /profile-job-seeker/:id | show | menampilkan data profile job seeker bedasarkan Id |
    | POST | /profile-job-seeker | create | membuat data baru profile job seeker |
    | PATCH / PUT | /profile-job-seeker/:id | update | mengupdate data profile job seeker bedasarkan Id |
    | DELETE | /profile-job-seeker/:id | destroy | menghapus data profile job seeker bedasarkan Id |

* Profile Recruiter:
    | HTTP  Verb | Path | Action | info |
    | ---------- | ---- |------- | ---- |
    | GET | /profile-recruiter | index | menampilkan semua data profile recruter |
    | GET | /profile-recruiter/:id | show | menampilkan data profile recruter bedasarkan Id |
    | POST | /profile-recruiter | create | membuat data baru profile recruter |
    | PATCH / PUT | /profile-recruiter/:id | update | mengupdate data profile recruter bedasarkan Id |
    | DELETE | /profile-recruiter/:id | destroy | menghapus data profile recruter bedasarkan Id |

* Project Recruiter:
    | HTTP  Verb | Path | Action | info |
    | ---------- | ---- |------- | ---- |
    | GET | /profile-recruiter | index | menampilkan semua data profile recruter |
    | GET | /profile-recruiter/:id | show | menampilkan data profile recruter bedasarkan Id |
    | POST | /profile-recruiter | create | membuat data baru profile recruter |
    | PATCH / PUT | /profile-recruiter/:id | update | mengupdate data profile recruter bedasarkan Id |
    | DELETE | /profile-recruiter/:id | destroy | menghapus data profile recruter bedasarkan Id |

[erd/flowchart]: https://drive.google.com/file/d/1o-mF5aIjFTS-0T4prgDNY6_kcdSQ-1ZF/view?usp=sharing