#include "MainWindow.h"
#include "ui_MainWindow.h"
#include <QWebChannel>

MainWindow::MainWindow(QWidget *parent) : QMainWindow(parent), ui(new Ui::MainWindow) {
  ui->setupUi(this);
  qputenv("QTWEBENGINE_REMOTE_DEBUGGING", "23654");
  m_channel = new QWebChannel(this);
  ui->webView->page()->setWebChannel(m_channel);

  m_channel->registerObject(QStringLiteral("mainwindow"), this);
  ui->webView->setUrl(QUrl("qrc:/html/resources/googlemaps.html"));
}

MainWindow::~MainWindow() {
  delete ui;
}

void MainWindow::on_actionExit_triggered() {
  close();
}
