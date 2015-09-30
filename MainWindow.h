#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QMainWindow>
#include <QDebug>

class QWebChannel;

namespace Ui {
  class MainWindow;
}

class MainWindow : public QMainWindow {
  Q_OBJECT

public:
  explicit MainWindow(QWidget *parent = 0);
  ~MainWindow();
  void print(const QString &str) const {
    qDebug() << str;
  }

private slots:
  void on_actionExit_triggered();

private:
  Ui::MainWindow *ui;
  QWebChannel *m_channel{nullptr};
};

#endif // MAINWINDOW_H
