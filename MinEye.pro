CONFIG += c++14
CONFIG += warn_on

QT       += core gui

greaterThan(QT_MAJOR_VERSION, 4): QT += widgets
greaterThan(QT_MAJOR_VERSION, 4): QT += webenginewidgets
greaterThan(QT_MAJOR_VERSION, 4): QT += webchannel

TARGET = MinEye
TEMPLATE = app

SOURCES +=\
    MainWindow.cc \
    main.cc

HEADERS  += \
    MainWindow.h

FORMS    += \
    MainWindow.ui

RESOURCES += res.qrc
